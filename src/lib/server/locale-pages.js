// Server-only: loads and renders a locale's Markdown pages at build time.
// Used by src/routes/[locale]/+page.server.js. Sources are the copies in
// src/content/locales/<slug>/index.md (see scripts/sync-locales.mjs).
import { Marked } from 'marked';
const files = import.meta.glob('/src/content/locales/**/*.md', { query: '?raw', import: 'default' });

/** Where relative links in the Markdown resolve: the source repository on GitHub. */
const REPOSITORY_BLOB = 'https://github.com/queue-theory/queue-theory/blob/main/';

/** Heading slug: letters, marks, numbers, "-" and "_" kept; spaces become "-". @param {string} text */
export function slugify(text) {
	return text
		.trim()
		.toLowerCase()
		.replace(/<[^>]+>/g, '')
		.replace(/&#39;|&apos;/g, "'")
		.replace(/&quot;/g, '"')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&amp;/g, '&')
		.replace(/[^\p{L}\p{M}\p{N}\-_ ]/gu, '')
		.replace(/ /g, '-');
}

/**
 * A relative Markdown link, written for the GitHub layout of the root README,
 * becomes a link to that file in the source repository.
 * @param {string} href
 */
function resolveLink(href) {
	return REPOSITORY_BLOB + href.replace(/^\.\//, '');
}

/**
 * Render markdown to HTML with stable heading ids and site-resolved links.
 * @param {string} markdown
 */
function render(markdown) {
	const marked = new Marked({ gfm: true });
	const seen = new Map();
	marked.use({
		renderer: {
			// Code blocks scroll sideways on narrow screens; tabindex makes them reachable by keyboard.
			code({ text, lang }) {
				const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
				const language = lang?.split(/\s/)[0];
				return `<pre tabindex="0"><code${language ? ` class="language-${language}"` : ''}>${escaped}\n</code></pre>\n`;
			},
			heading({ tokens, depth }) {
				const inner = this.parser.parseInline(tokens);
				let id = slugify(inner);
				const n = seen.get(id);
				seen.set(id, (n ?? -1) + 1);
				if (n !== undefined) id = `${id}-${n + 1}`;
				// Some tables of contents write "a + b" as "a-b" and "x.io" as "x-io";
				// keep those forms linkable too.
				const forms = new Set([id.replace(/-{2,}/g, '-'), slugify(inner.replace(/[./]/g, ' ')).replace(/-{2,}/g, '-')]);
				forms.delete(id);
				const alias = [...forms].map((f) => `<span id="${f}"></span>`).join('');
				return `${alias}<h${depth} id="${id}">${inner}</h${depth}>\n`;
			}
		},
		walkTokens(token) {
			if (token.type !== 'link' || /^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(token.href)) return;
			token.href = resolveLink(token.href);
		}
	});
	// GitHub alert markers ("> [!IMPORTANT]") have no meaning here; the blockquote carries the note.
	return marked.parse(markdown.replace(/^> \[!(?:IMPORTANT|NOTE|WARNING|TIP|CAUTION)\]\n/gim, ''), { async: false });
}

/** Plain text of Markdown inline syntax. @param {string} s */
function plain(s) {
	return s
		.replace(/!?\[([^\]]*)\]\(<[^>]*>\)/g, '$1')
		.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
		.replace(/<[^>]+>/g, '')
		.replace(/[*_`]+/g, '')
		.replace(/\s+/g, ' ')
		.trim();
}

/** @param {string} s @param {number} max characters (code points), cut at a word break when there is one */
function clip(s, max) {
	const chars = Array.from(s);
	if (chars.length <= max) return s;
	const cut = chars.slice(0, max).join('');
	const space = cut.lastIndexOf(' ');
	return (space > max * 0.6 ? cut.slice(0, space) : cut).replace(/[\s,.;:、，。]+$/, '') + '…';
}

/**
 * The first prose paragraph of a page (skipping headings, lists, tables, HTML,
 * code, and contents lists), as plain text clipped to `max` characters. A page
 * with no prose paragraph yields its first list item instead.
 * @param {string} markdown @param {number} [max]
 */
export function firstParagraph(markdown, max = 170) {
	let fence = false;
	let firstItem = '';
	/** @type {string[]} */
	let para = [];
	const done = () => {
		const text = plain(para.join(' '));
		para = [];
		return text.length >= 20 && !/[:：]$/.test(text) ? clip(text, max) : '';
	};
	for (const raw of markdown.split('\n')) {
		const line = raw.trim();
		if (line.startsWith('```')) {
			fence = !fence;
			continue;
		}
		if (fence) continue;
		if (!line) {
			const text = done();
			if (text) return text;
			continue;
		}
		if (/^(#|[-*+]\s|\d+[.)]\s|\||<|>|!\[|---)/.test(line)) {
			para = [];
			const item = /^([-*+]|\d+[.)])\s+(.*)$/.exec(line);
			if (item && !firstItem) {
				const text = plain(item[2]);
				if (text.length >= 20) firstItem = clip(text, max);
			}
			continue;
		}
		para.push(line);
	}
	return done() || firstItem;
}

/**
 * Indexes of the README's H2 sections shown as the six cards (see ../spec/website.md):
 * Introduction, notation, queue math, activity tracking, service metrics, queue of queues.
 */
const CARD_SECTIONS = [0, 2, 3, 4, 5, 6];

/**
 * Split Markdown into H2 sections, ignoring "## " inside code fences.
 * @param {string} markdown @returns {{title: string, body: string}[]}
 */
function h2Sections(markdown) {
	/** @type {{title: string, body: string[]}[]} */
	const out = [];
	let fence = false;
	for (const line of markdown.split('\n')) {
		if (line.startsWith('```')) fence = !fence;
		const h = !fence && /^##\s+(.+?)\s*#*\s*$/.exec(line);
		if (h) out.push({ title: plain(h[1]), body: [] });
		else out.at(-1)?.body.push(line);
	}
	return out.map((s) => ({ title: s.title, body: s.body.join('\n') }));
}

/**
 * The landing page of a locale: its root index.md, the translated README. The
 * title and first paragraph become the hero, six of its sections become cards
 * (title and first prose paragraph, linking to the section's anchor), and the
 * rest is rendered below. Null when the locale has no root index.md.
 * @param {string} slug
 */
export async function landingOf(slug) {
	const load = files[`/src/content/locales/${slug}/index.md`];
	if (!load) return null;
	const lines = (await load()).split('\n');
	const h1 = lines.findIndex((l) => /^#\s+/.test(l));
	let i = h1 + 1;
	while (i < lines.length && !lines[i].trim()) i++;
	const start = i;
	while (i < lines.length && lines[i].trim()) i++;
	const body = lines.slice(i).join('\n');
	const sections = h2Sections(body);
	return {
		hero: { title: plain(lines[h1].replace(/^#\s+/, '')), text: plain(lines.slice(start, i).join(' ')) },
		cards: CARD_SECTIONS.flatMap((n) => {
			const s = sections[n];
			return s ? [{ title: s.title, text: firstParagraph(s.body), href: `#${slugify(s.title)}` }] : [];
		}),
		html: render(body)
	};
}
