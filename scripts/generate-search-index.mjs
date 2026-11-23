#!/usr/bin/env node
// Writes static/search/<slug>.json, one search index per locale, from
// src/content/locales/<slug>/index.md. Each H2 section of the page is one
// record whose URL is the section's anchor, so a result jumps straight to it.
// A locale's file contains only that locale's records, which keeps
// /<slug>/?<query> from ever matching another locale. Run by `pnpm run content`
// after sync-locales.mjs; the generated files are committed.
//   pnpm run search-index
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const siteRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentRoot = path.join(siteRoot, 'src/content/locales');
const outDir = path.join(siteRoot, 'static/search');

// Must match slugify() in src/lib/server/locale-pages.js.
const slugify = (text) =>
	text
		.trim()
		.toLowerCase()
		.replace(/[^\p{L}\p{M}\p{N}\-_ ]/gu, '')
		.replace(/ /g, '-');

function plainText(md) {
	return md
		.replace(/<!--[\s\S]*?-->/g, ' ')
		.replace(/```[^\n]*\n/g, '\n')
		.replace(/!?\[([^\]]*)\]\(<[^>]*>\)/g, '$1')
		.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/<[^>]+>/g, ' ')
		.replace(/^\s{0,3}#{1,6}\s+/gm, '')
		.replace(/^\s*[-*+>]\s+/gm, '')
		.replace(/^\s*\d+\.\s+/gm, '')
		.replace(/[|`*_~]/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

function headingsOf(md) {
	let fence = false;
	const out = [];
	for (const line of md.split('\n')) {
		if (line.startsWith('```')) fence = !fence;
		const m = !fence && /^#{3,6}\s+(.+?)\s*#*$/.exec(line);
		if (m) out.push(plainText(m[1]));
	}
	return out;
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

for (const slug of readdirSync(contentRoot).sort()) {
	const md = readFileSync(path.join(contentRoot, slug, 'index.md'), 'utf8');
	const pageTitle = plainText((/^#\s+(.+)$/m.exec(md) ?? [, slug])[1]);
	const records = [];
	// parts[0] is the title, introduction, and contents list; each later part is one H2 section.
	const parts = md.split(/^(?=## )/m);
	for (const part of parts.slice(1)) {
		const title = plainText(/^##\s+(.+)$/m.exec(part)[1]);
		const id = slugify(title);
		records.push({ id, title, section: pageTitle, kind: 'section', url: `/${slug}/#${id}`, headings: headingsOf(part), text: plainText(part.replace(/^##.*$/m, '')) });
	}
	const json = JSON.stringify({ locale: slug, records });
	writeFileSync(path.join(outDir, `${slug}.json`), json);
	console.log(`${slug}: ${records.length} records, ${(Buffer.byteLength(json) / 1024).toFixed(0)} KB`);
}
