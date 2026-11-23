#!/usr/bin/env node
// Copies each locale's landing page, ../locales/<slug>/index.md (the README,
// translated), into src/content/locales/<slug>/index.md, and writes
// src/lib/locale-pages.json: { "<slug>": { "title": "<# heading>" } }.
// Reads the parent monorepo, so it runs with `pnpm run content`; the copied
// files are committed. Never hand-edit src/content/locales/.
//   pnpm run locales
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(here, '..');
const localesRoot = path.resolve(siteRoot, '..', 'locales');
const outRoot = path.join(siteRoot, 'src/content/locales');

const titleOf = (file, fallback) => {
	const m = /^#\s+(.+)$/m.exec(readFileSync(file, 'utf8'));
	return m ? m[1].replace(/\[([^\]]*)\]\([^)]*\)/g, '$1').replace(/[`*_]/g, '').trim() : fallback;
};

rmSync(outRoot, { recursive: true, force: true });
const slugs = readdirSync(localesRoot, { withFileTypes: true })
	.filter((e) => e.isDirectory() && /^[a-z]{2,3}-[a-z0-9]{2,3}$/.test(e.name))
	.map((e) => e.name)
	.sort();

/** @type {Record<string, {title: string}>} */
const tree = {};
for (const slug of slugs) {
	const file = path.join(localesRoot, slug, 'index.md');
	if (!existsSync(file)) continue;
	mkdirSync(path.join(outRoot, slug), { recursive: true });
	copyFileSync(file, path.join(outRoot, slug, 'index.md'));
	tree[slug] = { title: titleOf(file, slug) };
}

writeFileSync(path.join(siteRoot, 'src/lib/locale-pages.json'), JSON.stringify(tree, null, '\t') + '\n');
console.log(`Synced ${Object.keys(tree).length} locale page(s) into src/content/locales/ and src/lib/locale-pages.json`);
