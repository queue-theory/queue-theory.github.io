<script lang="ts">
	// Header — the site's picker controls come from Lily's picker-bar
	// helper, which composes theme, locale, text-size, and share pickers
	// into one row. Each picker still persists its own slug to
	// localStorage (see the storageKey below and app.html, which applies
	// the stored theme/text-size before first paint to avoid a flash).
	import { ContainerWithFixedWidth, Header } from '@lilydesignsystem/svelte-headless';
	import PickerBar, { DEFAULT_SIZES } from '@lilydesignsystem/svelte-picker-bar';
	import type { ShareTarget } from '@lilydesignsystem/svelte-share-picker';
	import { themes, DEFAULT_THEME_ID } from '#lib/data/themes.js';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { LOCALES, LOCALE_SLUGS, DEFAULT_LOCALE, localeToSlug } from '#lib/locales.js';
	import { pathForLocale } from '#lib/locale-nav.js';
	import { ui } from '#lib/i18n.js';

	const THEME_STORAGE_KEY = 'queue-theory-theme';
	const LOCALE_STORAGE_KEY = 'queue-theory-locale';
	const TEXT_SIZE_STORAGE_KEY = 'queue-theory-text-size';
	const DEFAULT_TEXT_SIZE = 'normal';

	const themeSlugs = themes.map((t) => t.id);
	const themeLabels = Object.fromEntries(themes.map((t) => [t.id, t.label]));

	// Lily's own 7-step scale — theme.css maps each of these
	// data-text-size values to a --user-font-scale.
	const TEXT_SIZES = DEFAULT_SIZES;

	// Locales translated under ../locales/ live in #lib/locales.js. Selecting a
	// locale sets lang/dir on <html>, persists the choice, and navigates to the
	// same page in that locale. Search is locale specific: it goes to
	// /<locale>/?<query>.
	let locale = $state(DEFAULT_LOCALE);

	// The picker shows the language of the page being viewed: the locale in the
	// path on a locale route (/de-001/...), so a shared link shows (and persists)
	// that locale, and English on every English-site page. Choosing a locale
	// navigates, which changes the URL, which keeps the picker in step.
	const urlLocale = $derived.by(() => {
		let segment = page.url.pathname.split('/')[1] ?? '';
		try {
			segment = decodeURIComponent(segment);
		} catch {
			// keep the raw segment
		}
		return (LOCALE_SLUGS.includes(segment) && LOCALES.find((l) => localeToSlug(l) === segment)) || DEFAULT_LOCALE;
	});

	// The picker calls onChange once when it initialises (restoring the stored
	// choice) and again on every user selection. Only a selection navigates:
	// to the same page in the chosen locale, or to that locale's contents page.
	let pickerReady = false;
	async function onLocaleChange(value: string) {
		const changed = value !== locale;
		locale = value;
		if (!pickerReady) {
			pickerReady = true;
			return;
		}
		// A value that matches the URL's own locale came from the URL, not a click.
		if (changed && value !== urlLocale) await goto(await pathForLocale(page.url.pathname, value));
	}

	// Locale labels: the endonym with any parenthesised region turned into
	// a dash, e.g. "English (United States)" -> "English - United States".
	// *_001 (world) locales drop the region: "English (world)" -> "English".
	// The first letter of each part is capitalised: "español" -> "Español".
	// The GB locales say "Great Britain" (Welsh: "Prydain Fawr", Scottish Gaelic:
	// "Breatainn Mhòr", Cornish: "Breten Veur") rather than "United Kingdom".
	const REGION_OVERRIDES: Record<string, string> = {
		en_GB: 'Great Britain',
		eu_ES: 'Espainia',
		cy_GB: 'Prydain Fawr',
		ga_IE: 'Éire',
		gd_GB: 'Breatainn Mhòr',
		is_IS: 'Ísland',
		km_KH: 'កម្ពុជា',
		kw_GB: 'Breten Veur',
		lb_LU: 'Lëtzebuerg',
		sco_GB: 'Great Britain'
	};
	// Browsers lack display-name data for Welsh, Basque, Icelandic, Javanese, Khmer, Luxembourgish, Scots, Cornish, Nigerian Pidgin and Wu Chinese (they show "Sco", "Kw", "PCM"),
	// show Irish and Scottish Gaelic in English, and shorten Indonesian to "Indonesia".
	const LANGUAGE_OVERRIDES: Record<string, string> = {
		cy: 'Cymraeg',
		eu: 'Euskara',
		ga: 'Gaeilge',
		gd: 'Gàidhlig',
		id: 'Bahasa Indonesia',
		is: 'Íslenska',
		jv: 'Basa Jawa',
		km: 'ខ្មែរ',
		kw: 'Kernewek',
		lb: 'Lëtzebuergesch',
		pcm: 'Naijá',
		sco: 'Scots',
		wuu: '吴语'
	};
	const LOCALE_LABELS = Object.fromEntries(
		LOCALES.map((l) => {
			const tag = l.replace('_', '-');
			const name = new Intl.DisplayNames([tag], { type: 'language', languageDisplay: 'standard' }).of(tag) ?? l;
			const label = l.endsWith('_001')
				? name.replace(/\s*[(（][^)）]*[)）]\s*$/, '')
				: name.replace(/\s*[(（]([^)）]*)[)）]\s*$/, ' - $1');
			const [language, ...rest] = (l in REGION_OVERRIDES ? label.replace(/ - .*$/, ` - ${REGION_OVERRIDES[l]}`) : label).split(' - ');
			const named = [LANGUAGE_OVERRIDES[l.split('_')[0]] ?? language, ...rest].join(' - ');
			return [l, named.replace(/(^| - )(\S)/g, (_, sep, c) => sep + c.toLocaleUpperCase(tag))];
		})
	);

	const t = $derived(ui(localeToSlug(urlLocale)));
	const shareTargets: ShareTarget[] = $derived([
		{
			id: 'email',
			label: t.shareEmailLabel,
			href: (url, title) => `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
			newTab: false
		},
		{
			id: 'linkedin',
			label: t.shareLinkedinLabel,
			href: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
		},
		{
			id: 'reddit',
			label: t.shareRedditLabel,
			href: (url, title) => `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
		},
		{
			id: 'bluesky',
			label: t.shareBlueskyLabel,
			href: (url, title) => `https://bsky.app/intent/compose?text=${encodeURIComponent(`${title} ${url}`)}`
		},
		{
			id: 'mastodon',
			label: t.shareMastodonLabel,
			href: (url, title) => `https://mastodonshare.com/?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
		}
	]);

	// The link picker (a home icon, leftmost in the bar): the locale's landing page
	// and the GitHub repository.
	const REPOSITORY = 'https://github.com/queue-theory/queue-theory';
	const currentPath = $derived.by(() => {
		try {
			return decodeURIComponent(page.url.pathname);
		} catch {
			return page.url.pathname;
		}
	});
	const brand = $derived(page.data?.landing?.hero?.title ?? 'Queue theory');
	const navSlug = $derived(localeToSlug(urlLocale));
	const links = $derived.by(() => {
		const home = `/${navSlug}/`;
		return [
			{ label: t.navHome, href: home, current: currentPath === home },
			{ label: 'GitHub', href: REPOSITORY, newTab: true }
		];
	});

	// The closed theme control is one glyph, so nothing else on the page
	// states the active theme. Tracked here (via themeProps.onChange) only
	// to feed the visually-hidden status paragraph below.
	let activeTheme = $state(DEFAULT_THEME_ID);
</script>

<Header label={brand}>
	<ContainerWithFixedWidth maxWidth="64rem">
		<div class="site-header-bar">
			<a class="brand" href="/{navSlug}/">
				<img class="brand-icon" src="/icon.svg" alt="" width="28" height="28" />
				<strong>{brand}</strong>
			</a>
			<nav class="site-nav" aria-label={t.navHome}>
				<a href="/{navSlug}/">{t.navHome}</a>
				<a href={REPOSITORY}>GitHub</a>
			</nav>
			<div class="site-header-controls">
				<PickerBar
					labels={{
						link: t.pickerLinks,
						search: t.searchInputLabel,
						searchInput: t.searchPlaceholder,
						searchSubmit: t.navSearch,
						theme: t.pickerTheme,
						locale: t.pickerLanguage,
						textSize: t.pickerTextSize,
						share: t.pickerShare
					}}
					{links}
					linkProps={{ navigate: (href: string) => goto(href) }}
					searchProps={{ action: `/${localeToSlug(locale)}/` }}
					themesUrl="/themes/"
					themes={themeSlugs}
					themeProps={{
						themeLabels,
						storageKey: THEME_STORAGE_KEY,
						defaultValue: DEFAULT_THEME_ID,
						name: 'theme',
						onChange: (theme: string) => (activeTheme = theme)
					}}
					locales={LOCALES}
					localeProps={{
						storageKey: LOCALE_STORAGE_KEY,
						defaultValue: 'en',
						name: 'locale',
						value: urlLocale,
						onChange: onLocaleChange,
						localeLabels: LOCALE_LABELS
					}}
					sizes={TEXT_SIZES}
					textSizeProps={{
						storageKey: TEXT_SIZE_STORAGE_KEY,
						defaultValue: DEFAULT_TEXT_SIZE,
						name: 'text-size',
						sizeLabels: t.sizeLabels
					}}
					{shareTargets}
					shareProps={{
						title: brand,
						copyLabel: t.shareCopyLink,
						copiedLabel: t.shareCopied,
						copyFailedLabel: t.shareCopyFailed
					}}
				/>
			</div>
		</div>
	</ContainerWithFixedWidth>
</Header>
<!-- Visually hidden — the header stays icon-only — but present for
     assistive technology, and aria-live announces only on change, so it
     stays silent at first paint. -->
<p class="theme-picker-status visually-hidden" aria-live="polite">
	{t.pickerTheme}: {themeLabels[activeTheme] ?? activeTheme}
</p>
