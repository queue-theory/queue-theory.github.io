#!/usr/bin/env node
// Writes static/sitemap.xml from src/lib/locale-pages.json: one URL per
// locale landing page, except NOINDEX locales (copies of another locale).
// URLs end in "/" to match `trailingSlash = 'always'` in src/routes/+layout.js.
// Reads only files inside this directory (it also runs in the published repo).
//   pnpm run sitemap
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { NOINDEX } from '../src/lib/locales.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://queue-theory.github.io';

const tree = JSON.parse(readFileSync(path.join(root, 'src/lib/locale-pages.json'), 'utf8'));
const paths = Object.keys(tree)
	.filter((slug) => !NOINDEX.includes(slug))
	.map((slug) => `/${slug}/`);

const xml = [
	'<?xml version="1.0" encoding="UTF-8"?>',
	'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
	...paths.map((p) => `  <url><loc>${SITE}${encodeURI(p)}</loc></url>`),
	'</urlset>',
	''
].join('\n');

writeFileSync(path.join(root, 'static/sitemap.xml'), xml);
console.log(`Wrote static/sitemap.xml (${paths.length} URLs).`);
