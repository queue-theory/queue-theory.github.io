// Hand-authored hero strings per locale: the one-sentence subheadline, and the
// "Translations: " label (the translated word, a colon and a space). ENDONYMS
// lists each locale's own name for its language; the hero links every *-001
// locale by its endonym.
/** @type {Record<string, {tagline: string, translations: string}>} */
export const HERO = {
	'en-001': {
		tagline: 'Waiting lines, explained for software teams: notation, formulas, metrics, and insights.',
		translations: 'Translations: '
	},
	'en-gb': {
		tagline: 'Waiting lines, explained for software teams: notation, formulas, metrics, and insights.',
		translations: 'Translations: '
	},
	'en-us': {
		tagline: 'Waiting lines, explained for software teams: notation, formulas, metrics, and insights.',
		translations: 'Translations: '
	},
	'cy-001': {
		tagline: 'Ciwiau aros, wedi’u hesbonio ar gyfer timau meddalwedd: nodiant, fformiwlâu, metrigau, a mewnwelediadau.',
		translations: 'Cyfieithiadau: '
	},
	'cy-gb': {
		tagline: 'Ciwiau aros, wedi’u hesbonio ar gyfer timau meddalwedd: nodiant, fformiwlâu, metrigau, a mewnwelediadau.',
		translations: 'Cyfieithiadau: '
	},
	'cy-ar': {
		tagline: 'Ciwiau aros, wedi’u hesbonio ar gyfer timau meddalwedd: nodiant, fformiwlâu, metrigau, a mewnwelediadau.',
		translations: 'Cyfieithiadau: '
	},
	'es-001': {
		tagline: 'Las colas de espera, explicadas para equipos de software: notación, fórmulas, métricas e ideas clave.',
		translations: 'Traducciones: '
	},
	'es-es': {
		tagline: 'Las colas de espera, explicadas para equipos de software: notación, fórmulas, métricas e ideas clave.',
		translations: 'Traducciones: '
	},
	'es-mx': {
		tagline: 'Las colas de espera, explicadas para equipos de software: notación, fórmulas, métricas e ideas clave.',
		translations: 'Traducciones: '
	},
};

/** @type {Record<string, string>} */
export const ENDONYMS = {
	'cy-001': 'Cymraeg',
	'en-001': 'English',
	'es-001': 'Español'
};
