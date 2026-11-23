// Unit tests for the "/" language router rules (spec/website.md "URL scheme").
//   pnpm test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { routeForLanguages as route, localeToSlug, LOCALES, LOCALE_SLUGS } from '../src/lib/locales.js';

const cases = [
	// exact locale, either separator, any case
	[['cy_GB'], '/cy-gb/'],
	[['cy-GB'], '/cy-gb/'],
	[['CY_ar'], '/cy-ar/'],
	// the language's international *-001 locale
	[['cy'], '/cy-001/'],
	[['cy-US'], '/cy-001/'],
	[['en'], '/en-001/'],
	[['en-US'], '/en-us/'],
	[['en-GB'], '/en-gb/'],
	[['en-AU'], '/en-001/'],
	[['es'], '/es-001/'],
	[['es-MX'], '/es-mx/'],
	[['es-ES'], '/es-es/'],
	[['es-AR'], '/es-001/'],
	[['es-419'], '/es-001/'],
	[['zh'], '/zh-001/'],
	[['zh-CN'], '/zh-cn/'],
	[['zh-Hans'], '/zh-cn/'],
	[['zh-Hant'], '/zh-tw/'],
	[['zh-TW'], '/zh-tw/'],
	[['zh-HK'], '/zh-tw/'],
	[['zh-SG'], '/zh-001/'],
	// first usable preference wins; unmatched ones are skipped
	[['xx', 'cy-GB'], '/cy-gb/'],
	[['de-DE', 'en-GB'], '/en-gb/'],
	// nothing matches: English
	[['zu'], '/en-001/'],
	[[], '/en-001/'],
	[[''], '/en-001/']
];

for (const [languages, expected] of cases) {
	test(`${JSON.stringify(languages)} -> ${expected}`, () => assert.equal(route(languages), expected));
}

test('every route the router can return is a real locale route', () => {
	for (const [languages] of cases) assert.ok(LOCALE_SLUGS.includes(route(languages).replaceAll('/', '')));
});

test('picker values map to unique, hyphenated slugs', () => {
	assert.equal(localeToSlug('en'), 'en-001');
	assert.equal(localeToSlug('cy_GB'), 'cy-gb');
	assert.equal(new Set(LOCALES.map(localeToSlug)).size, LOCALES.length);
	for (const slug of LOCALE_SLUGS) assert.match(slug, /^[a-z]{2,3}-[a-z0-9]{2,3}$/);
});
