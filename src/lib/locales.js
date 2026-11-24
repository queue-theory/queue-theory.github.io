// Picker locale values (sorted by code). A value is "ll_RR" (or bare "en");
// its URL slug and source directory under ../locales/ is the lowercase form
// with "_" replaced by "-" ("de_001" -> "de-001"). The bare "en" has no
// directory of its own and maps to the source-of-truth locale "en-001" (so
// "en_001" is not listed separately: it would be a duplicate "English").
// See spec/locale-specific-search-picker/index.md.
export const LOCALES = ['ar_001', 'ar_DZ', 'ar_EG', 'bg_001', 'bg_BG', 'bn_001', 'bn_BD', 'bn_IN', 'cs_001', 'cs_CZ', 'cy_001', 'cy_AR', 'cy_GB', 'da_001', 'da_DK', 'de_001', 'de_AT', 'de_DE', 'el_001', 'el_CY', 'el_GR', 'en', 'en_GB', 'en_IE', 'en_US', 'es_001', 'es_ES', 'es_MX', 'et_001', 'et_EE', 'eu_001', 'eu_ES', 'fa_001', 'fi_001', 'fi_FI', 'fr_001', 'fr_BE', 'fr_CA', 'fr_FR', 'fr_LU', 'ga_001', 'ga_IE', 'gd_001', 'gd_GB', 'gu_001', 'ha_001', 'he_001', 'hi_001', 'hi_IN', 'hi_NP', 'hr_001', 'hr_HR', 'hu_001', 'hu_HU', 'id_001', 'id_ID', 'id_MY', 'is_001', 'is_IS', 'it_001', 'it_IT', 'ja_001', 'ja_JP', 'jv_001', 'km_001', 'km_KH', 'kn_001', 'ko_001', 'ko_KR', 'kw_001', 'kw_GB', 'lb_001', 'lb_LU', 'lo_001', 'lo_LA', 'lt_001', 'lt_LT', 'lv_001', 'lv_LV', 'mr_001', 'ms_001', 'mt_001', 'mt_MT', 'nb_001', 'nb_NO', 'nl_001', 'nl_NL', 'pt_001', 'pt_BR', 'pt_PT', 'ru_001', 'ru_BY', 'ru_RU', 'sv_001', 'sv_SE', 'sw_001', 'sw_TZ', 'tr_001', 'tr_TR', 'ur_001', 'vi_001', 'vi_VN', 'zh_001', 'zh_CN', 'zh_TW'];

export const DEFAULT_LOCALE = 'en';

/** @param {string} value picker locale value @returns {string} URL slug */
export function localeToSlug(value) {
	if (!value || value === 'en') return 'en-001';
	return value.toLowerCase().replace(/_/g, '-');
}

/** Every URL slug that has a locale route, deduplicated. */
export const LOCALE_SLUGS = [...new Set(LOCALES.map(localeToSlug))];

/** BCP 47 tag for a slug ("zh-tw" -> "zh-TW", "de-001" -> "de-001"). @param {string} slug */
export function slugToTag(slug) {
	const [lang, region] = slug.split('-');
	return region ? `${lang}-${region.length === 2 ? region.toUpperCase() : region}` : lang;
}

const RTL = new Set(['ar', 'ur', 'he', 'fa']);
/** @param {string} slug */
export function isRtlSlug(slug) {
	return RTL.has(slug.split('-')[0]);
}

/**
 * The route to send a visitor to, from the browser's language preferences
 * (`navigator.languages`, most preferred first). Used by the "/" page.
 *
 * Per preference, the first rule that matches wins:
 *  1. the exact locale ("cy_GB" or "cy-GB" -> "cy-gb", "zh-TW" -> "zh-tw");
 *  2. Chinese by script or region, when that locale exists ("zh-Hant", "zh-HK", "zh-MO" -> "zh-tw"; "zh-Hans" -> "zh-cn");
 *  3. the language's international *-001 locale ("en-AU", "de-DE", "pt-BR", "fi" -> "en-001", "de-001", "pt-001", "fi-001").
 * Preferences that match nothing are skipped; with no match at all the result
 * is "/en-001/". See spec/website.md.
 * @param {readonly string[]} languages
 * @returns {string} a path such as "/cy-gb/" or "/en-001/"
 */
export function routeForLanguages(languages) {
	for (const raw of languages) {
		const parts = String(raw).trim().replace(/_/g, '-').toLowerCase().split('-').filter(Boolean);
		const lang = parts[0];
		if (!lang) continue;
		const script = parts.find((p, i) => i > 0 && /^[a-z]{4}$/.test(p));
		const region = parts.find((p, i) => i > 0 && /^([a-z]{2}|\d{3})$/.test(p));

		if (region && LOCALE_SLUGS.includes(`${lang}-${region}`)) return `/${lang}-${region}/`;
		if (lang === 'zh' && (script === 'hant' || region === 'hk' || region === 'mo') && LOCALE_SLUGS.includes('zh-tw')) return '/zh-tw/';
		if (lang === 'zh' && script === 'hans' && LOCALE_SLUGS.includes('zh-cn')) return '/zh-cn/';
		if (LOCALE_SLUGS.includes(`${lang}-001`)) return `/${lang}-001/`;
	}
	return '/en-001/';
}

/**
 * Locales that duplicate another locale's content (copies of a translation),
 * so search engines should index only the original: they are `noindex` and
 * left out of the sitemap. See ../spec/locales.md.
 */
export const NOINDEX = ['ar-dz', 'ar-eg', 'bg-bg', 'bn-bd', 'bn-in', 'cs-cz', 'cy-gb', 'cy-ar', 'da-dk', 'de-at', 'de-de', 'el-cy', 'el-gr', 'en-gb', 'en-ie', 'en-us', 'es-es', 'es-mx', 'et-ee', 'eu-es', 'fi-fi', 'fr-be', 'fr-ca', 'fr-fr', 'fr-lu', 'ga-ie', 'gd-gb', 'hi-in', 'hi-np', 'hr-hr', 'hu-hu', 'id-id', 'id-my', 'is-is', 'it-it', 'ja-jp', 'km-kh', 'ko-kr', 'kw-gb', 'lb-lu', 'lo-la', 'lt-lt', 'lv-lv', 'mt-mt', 'nb-no', 'nl-nl', 'pt-br', 'pt-pt', 'ru-by', 'ru-ru', 'sv-se', 'sw-tz', 'tr-tr', 'vi-vn', 'zh-cn'];
