#!/usr/bin/env node
// Writes static/llms.txt and static/llms.json from the en-001 landing page
// (src/content/locales/en-001/index.md: its H2 sections, as anchor links) and
// the LOCALES array in src/lib/locales.js, so the lists never drift from the
// site. Reads only files inside this directory (it also runs in the published repo).
//   pnpm run llms
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { LOCALES, LOCALE_SLUGS } from '../src/lib/locales.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://queue-theory.github.io';
const REPO = 'https://github.com/queue-theory/queue-theory';
const TITLE = 'Queue theory';
const SUMMARY =
	'Queue theory (queueing theory) for software teams: notation, utilization, Little’s law, Kingman’s formula, Erlang C, service metrics, DORA metrics, and practical insights.';

const slugify = (text) =>
	text
		.trim()
		.toLowerCase()
		.replace(/[^\p{L}\p{M}\p{N}\-_ ]/gu, '')
		.replace(/ /g, '-');
const md = readFileSync(path.join(root, 'src/content/locales/en-001/index.md'), 'utf8');
const sections = [...md.matchAll(/^##\s+(.+)$/gm)].map((m) => ({ title: m[1].trim(), url: `${SITE}/en-001/#${slugify(m[1])}` }));

const txt = [
	`# ${TITLE}`,
	'',
	`> ${SUMMARY} Source: ${REPO}`,
	'',
	'## Sections',
	'',
	...sections.map((s) => `- [${s.title}](${s.url})`),
	'',
	'## Translations',
	'',
	...LOCALE_SLUGS.map((slug) => `- [${slug}](${SITE}/${slug}/)`),
	'',
	'## Optional',
	'',
	`- [Source repository](${REPO}): README, specification (spec/), agent guide (AGENTS.md)`,
	''
].join('\n');

const json = { name: TITLE, summary: SUMMARY, site: SITE, repository: REPO, sections, locales: LOCALES, translations: `${REPO}/tree/main/locales` };

writeFileSync(path.join(root, 'static/llms.txt'), txt);
writeFileSync(path.join(root, 'static/llms.json'), JSON.stringify(json, null, 2) + '\n');
console.log(`Wrote static/llms.txt and static/llms.json (${sections.length} sections, ${LOCALES.length} locales).`);
