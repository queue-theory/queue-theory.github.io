// All 65 ready-made Lily Design System themes. Each theme is a standalone
// CSS file (static/themes/<id>.css) that styles every one of Lily's 492
// component class hooks — see Header.svelte's PickerBar, which lazy-loads
// exactly one of these per selection rather than bundling all 65 up front.
//
// Order: alphabetical by label, with national (government/NHS)
// themes sorted to the end, after all the non-national themes.
export interface ThemeOption {
	id: string;
	label: string;
	group: 'General' | 'National';
}

export const DEFAULT_THEME_ID = 'light';

export const themes: ThemeOption[] = [
	{ id: 'abyss', label: 'Abyss', group: 'General' },
	{ id: 'acid', label: 'Acid', group: 'General' },
	{ id: 'adobe-spectrum', label: 'Adobe Spectrum', group: 'General' },
	{ id: 'ant-design', label: 'Ant Design', group: 'General' },
	{ id: 'aqua', label: 'Aqua', group: 'General' },
	{ id: 'atlassian', label: 'Atlassian', group: 'General' },
	{ id: 'autumn', label: 'Autumn', group: 'General' },
	{ id: 'black', label: 'Black', group: 'General' },
	{ id: 'bumblebee', label: 'Bumblebee', group: 'General' },
	{ id: 'business', label: 'Business', group: 'General' },
	{ id: 'cappuccino', label: 'Cappuccino', group: 'General' },
	{ id: 'caramellatte', label: 'Caramel Latte', group: 'General' },
	{ id: 'cmyk', label: 'CMYK', group: 'General' },
	{ id: 'coffee', label: 'Coffee', group: 'General' },
	{ id: 'corporate', label: 'Corporate', group: 'General' },
	{ id: 'cupcake', label: 'Cupcake', group: 'General' },
	{ id: 'cyberpunk', label: 'Cyberpunk', group: 'General' },
	{ id: 'dark', label: 'Dark', group: 'General' },
	{ id: 'dark-high-contrast', label: 'Dark High Contrast', group: 'General' },
	{ id: 'dim', label: 'Dim', group: 'General' },
	{ id: 'dracula', label: 'Dracula', group: 'General' },
	{ id: 'emerald', label: 'Emerald', group: 'General' },
	{ id: 'excel', label: 'Excel', group: 'General' },
	{ id: 'fantasy', label: 'Fantasy', group: 'General' },
	{ id: 'fluent', label: 'Fluent', group: 'General' },
	{ id: 'forest', label: 'Forest', group: 'General' },
	{ id: 'garden', label: 'Garden', group: 'General' },
	{ id: 'github-primer', label: 'GitHub Primer', group: 'General' },
	{ id: 'halloween', label: 'Halloween', group: 'General' },
	{ id: 'ibm-carbon', label: 'IBM Carbon', group: 'General' },
	{ id: 'lemonade', label: 'Lemonade', group: 'General' },
	{ id: 'light', label: 'Light', group: 'General' },
	{ id: 'light-high-contrast', label: 'Light High Contrast', group: 'General' },
	{ id: 'linear', label: 'Linear', group: 'General' },
	{ id: 'lofi', label: 'Lo-Fi', group: 'General' },
	{ id: 'luxury', label: 'Luxury', group: 'General' },
	{ id: 'mozilla-protocol', label: 'Mozilla Protocol', group: 'General' },
	{ id: 'night', label: 'Night', group: 'General' },
	{ id: 'nord', label: 'Nord', group: 'General' },
	{ id: 'notion', label: 'Notion', group: 'General' },
	{ id: 'pastel', label: 'Pastel', group: 'General' },
	{ id: 'retro', label: 'Retro', group: 'General' },
	{ id: 'salesforce', label: 'Salesforce', group: 'General' },
	{ id: 'sap-fiori', label: 'SAP Fiori', group: 'General' },
	{ id: 'silk', label: 'Silk', group: 'General' },
	{ id: 'sunset', label: 'Sunset', group: 'General' },
	{ id: 'synthwave', label: 'Synthwave', group: 'General' },
	{ id: 'valentine', label: 'Valentine', group: 'General' },
	{ id: 'vercel', label: 'Vercel', group: 'General' },
	{ id: 'winter', label: 'Winter', group: 'General' },
	{ id: 'wireframe', label: 'Wireframe', group: 'General' },

	// National themes — sorted last, alphabetically among themselves.
	{ id: 'australia-agriculture-design-system', label: 'Australia — Agriculture', group: 'National' },
	{ id: 'brazil-padrao-digital-de-governo', label: 'Brazil — Padrão Digital de Governo', group: 'National' },
	{ id: 'canada-government-of-canada-design-system', label: 'Canada — Government of Canada', group: 'National' },
	{ id: 'european-union-europa-component-library', label: 'European Union — Europa', group: 'National' },
	{ id: 'united-kingdom-government-digital-service', label: 'GOV.UK', group: 'National' },
	{ id: 'japan-digital-agency-design-system', label: 'Japan — Digital Agency', group: 'National' },
	{ id: 'united-kingdom-national-health-service-england-for-patients', label: 'NHS England — patients', group: 'National' },
	{ id: 'united-kingdom-national-health-service-england-for-practitioners', label: 'NHS England — practitioners', group: 'National' },
	{ id: 'united-kingdom-national-health-service-scotland-for-patients', label: 'NHS Scotland — patients', group: 'National' },
	{ id: 'united-kingdom-national-health-service-scotland-for-practitioners', label: 'NHS Scotland — practitioners', group: 'National' },
	{ id: 'united-kingdom-national-health-service-wales-for-patients', label: 'NHS Wales — patients', group: 'National' },
	{ id: 'united-kingdom-national-health-service-wales-for-practitioners', label: 'NHS Wales — practitioners', group: 'National' },
	{ id: 'singapore-government-design-system', label: 'Singapore — Government', group: 'National' },
	{ id: 'united-states-web-design-system', label: 'USWDS (US government)', group: 'National' }
];
