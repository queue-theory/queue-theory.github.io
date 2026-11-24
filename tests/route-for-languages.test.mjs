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
	[['da'], '/da-001/'],
	[['da-DK'], '/da-001/'],
	[['de'], '/de-001/'],
	[['de-DE'], '/de-de/'],
	[['de-AT'], '/de-at/'],
	[['de-CH'], '/de-001/'],
	[['en'], '/en-001/'],
	[['en-US'], '/en-us/'],
	[['en-GB'], '/en-gb/'],
	[['en-AU'], '/en-001/'],
	[['es'], '/es-001/'],
	[['es-MX'], '/es-mx/'],
	[['es-ES'], '/es-es/'],
	[['es-AR'], '/es-001/'],
	[['es-419'], '/es-001/'],
	[['fr'], '/fr-001/'],
	[['fr-FR'], '/fr-fr/'],
	[['fr-CA'], '/fr-ca/'],
	[['fr-BE'], '/fr-001/'],
	[['ar'], '/ar-001/'],
	[['ar-EG'], '/ar-eg/'],
	[['ar-DZ'], '/ar-dz/'],
	[['ar-SA'], '/ar-001/'],
	[['bn'], '/bn-001/'],
	[['bn-BD'], '/bn-bd/'],
	[['bn-IN'], '/bn-in/'],
	[['bn-GB'], '/bn-001/'],
	[['hi'], '/hi-001/'],
	[['hi-IN'], '/hi-in/'],
	[['hi-NP'], '/hi-np/'],
	[['id'], '/id-001/'],
	[['id-ID'], '/id-id/'],
	[['id-MY'], '/id-my/'],
	[['id-SG'], '/id-001/'],
	[['it'], '/it-001/'],
	[['it-IT'], '/it-it/'],
	[['it-CH'], '/it-001/'],
	[['ja'], '/ja-001/'],
	[['ja-JP'], '/ja-jp/'],
	[['ja-US'], '/ja-001/'],
	[['ko'], '/ko-001/'],
	[['ko-KR'], '/ko-kr/'],
	[['ko-US'], '/ko-001/'],
	[['nl'], '/nl-001/'],
	[['nl-NL'], '/nl-nl/'],
	[['nl-BE'], '/nl-001/'],
	[['pt'], '/pt-001/'],
	[['pt-BR'], '/pt-br/'],
	[['pt-PT'], '/pt-pt/'],
	[['pt-AO'], '/pt-001/'],
	[['ru'], '/ru-001/'],
	[['ru-RU'], '/ru-ru/'],
	[['ru-BY'], '/ru-by/'],
	[['ru-KZ'], '/ru-001/'],
	[['sv'], '/sv-001/'],
	[['sv-SE'], '/sv-se/'],
	[['sv-FI'], '/sv-001/'],
	[['sw'], '/sw-001/'],
	[['sw-TZ'], '/sw-tz/'],
	[['sw-KE'], '/sw-001/'],
	[['ur'], '/ur-001/'],
	[['ur-PK'], '/ur-001/'],
	[['vi'], '/vi-001/'],
	[['vi-VN'], '/vi-vn/'],
	[['vi-US'], '/vi-001/'],
	[['zh'], '/zh-001/'],
	[['zh-CN'], '/zh-cn/'],
	[['zh-Hans'], '/zh-cn/'],
	[['zh-Hant'], '/zh-tw/'],
	[['zh-TW'], '/zh-tw/'],
	[['zh-HK'], '/zh-tw/'],
	[['zh-SG'], '/zh-001/'],
	// first usable preference wins; unmatched ones are skipped
	[['xx', 'cy-GB'], '/cy-gb/'],
	[['xx-XX', 'en-GB'], '/en-gb/'],
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
