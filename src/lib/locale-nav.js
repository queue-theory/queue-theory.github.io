// Where the language picker goes when a locale is chosen. Each locale has one
// page, its landing page, so the target is always `/<slug>/`, keeping the
// in-page #fragment so the reader stays in the same section when the
// translation uses the same heading slugs.
import { localeToSlug } from './locales.js';

/**
 * @param {string} _pathname current path (unused: every locale has one page)
 * @param {string} toValue picker locale value being chosen (e.g. "cy_GB", "en")
 * @returns {Promise<string>} path to navigate to
 */
export async function pathForLocale(_pathname, toValue) {
	return `/${localeToSlug(toValue)}/`;
}
