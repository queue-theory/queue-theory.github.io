// Hand-authored hero strings per locale: the one-sentence subheadline, and the
// "Languages: " label (the translated word, a colon and a space). ENDONYMS
// lists each locale's own name for its language; the hero links every *-001
// locale by its endonym.
/** @type {Record<string, {tagline: string, languages: string}>} */
export const HERO = {
	'en-001': {
		tagline: 'Waiting lines, explained for software teams: notation, formulas, metrics, and insights.',
		languages: 'Languages: '
	},
	'en-gb': {
		tagline: 'Waiting lines, explained for software teams: notation, formulas, metrics, and insights.',
		languages: 'Languages: '
	},
	'en-us': {
		tagline: 'Waiting lines, explained for software teams: notation, formulas, metrics, and insights.',
		languages: 'Languages: '
	},
	'cy-001': {
		tagline: 'Ciwiau aros, wedi’u hesbonio ar gyfer timau meddalwedd: nodiant, fformiwlâu, metrigau, a mewnwelediadau.',
		languages: 'Ieithoedd: '
	},
	'cy-gb': {
		tagline: 'Ciwiau aros, wedi’u hesbonio ar gyfer timau meddalwedd: nodiant, fformiwlâu, metrigau, a mewnwelediadau.',
		languages: 'Ieithoedd: '
	},
	'cy-ar': {
		tagline: 'Ciwiau aros, wedi’u hesbonio ar gyfer timau meddalwedd: nodiant, fformiwlâu, metrigau, a mewnwelediadau.',
		languages: 'Ieithoedd: '
	},
	'es-001': {
		tagline: 'Las colas de espera, explicadas para equipos de software: notación, fórmulas, métricas e ideas clave.',
		languages: 'Idiomas: '
	},
	'es-es': {
		tagline: 'Las colas de espera, explicadas para equipos de software: notación, fórmulas, métricas e ideas clave.',
		languages: 'Idiomas: '
	},
	'es-mx': {
		tagline: 'Las colas de espera, explicadas para equipos de software: notación, fórmulas, métricas e ideas clave.',
		languages: 'Idiomas: '
	},
	'zh-001': {
		tagline: '为软件团队讲解排队：符号、公式、指标与洞见。',
		languages: '语言：'
	},
	'zh-cn': {
		tagline: '为软件团队讲解排队：符号、公式、指标与洞见。',
		languages: '语言：'
	},
	'zh-tw': {
		tagline: '為軟體團隊講解排隊：符號、公式、指標與洞見。',
		languages: '語言：'
	}
};

/** @type {Record<string, string>} */
export const ENDONYMS = {
	'cy-001': 'Cymraeg',
	'en-001': 'English',
	'es-001': 'Español',
	'zh-001': '中文'
};
