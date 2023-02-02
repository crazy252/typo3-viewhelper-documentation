/** @type {import('vitepress').UserConfig} */
const config = {
	base: '/typo3-viewhelper-documentation/',
	lang: 'en-US',
 	title: 'TYPO3 ViewHelpers',
 	description: 'TYPO3 ViewHelpers Documentation for fluid, flux, vhs, news and many more.',
	lastUpdated: true,
	cleanUrls: true,
	markdown: {
		theme: 'material-theme-palenight',
		lineNumbers: true
	},
	themeConfig: {
		lastUpdatedText: 'Updated date',
		nav: [
			{text: 'Extensions', link: '/extensions/crazy252-typo3vite/asset', activeMatch: '/extensions/'},
		],
		sidebar: {
			'/extensions/': [
				{
					text: 'crazy252/typo3vite',
					collapsible: true,
					collapsed: true,
					items: [
						{text: 'vite:asset', link: '/extensions/crazy252-typo3vite/asset'},
						{text: 'vite:react', link: '/extensions/crazy252-typo3vite/react'},
						{text: 'vite:webManifest', link: '/extensions/crazy252-typo3vite/web-manifest'},
					]
				},
				{
					text: 'fluidtypo3/flux',
					collapsible: true,
					collapsed: true,
					items: [
						{text: 'flux:content.get', link: '/extensions/fluidtypo3-flux/content-get'},
						{text: 'flux:content.render', link: '/extensions/fluidtypo3-flux/content-render'},
						{text: 'flux:form.object.columnPosition', link: '/extensions/fluidtypo3-flux/form-object-columnposition'},
						{text: 'flux:form.option.group', link: '/extensions/fluidtypo3-flux/form-option-group'},
						{text: 'flux:form.option.icon', link: '/extensions/fluidtypo3-flux/form-option-icon'},
						{text: 'flux:form.option.sorting', link: '/extensions/fluidtypo3-flux/form-option-sorting'},
						{text: 'flux:form.option.static', link: '/extensions/fluidtypo3-flux/form-option-static'},
						{text: 'flux:form.container', link: '/extensions/fluidtypo3-flux/form-container'},
						{text: 'flux:form.content', link: '/extensions/fluidtypo3-flux/form-content'},
						{text: 'flux:form.data', link: '/extensions/fluidtypo3-flux/form-data'},
						{text: 'flux:form.option', link: '/extensions/fluidtypo3-flux/form-option'},
						{text: 'flux:form.render', link: '/extensions/fluidtypo3-flux/form-render'},
						{text: 'flux:form.section', link: '/extensions/fluidtypo3-flux/form-section'},
						{text: 'flux:form.sheet', link: '/extensions/fluidtypo3-flux/form-sheet'},
						{text: 'flux:form.variable', link: '/extensions/fluidtypo3-flux/form-variable'},
					]
				},
				{
					text: 'fluidtypo3/vhs',
					collapsible: true,
					collapsed: true,
					items: [
						{text: 'Test', link: '/extensions/fluidtypo3-vhs/test'},
					]
				},
				{
					text: 'georgringer/news',
					collapsible: true,
					collapsed: true,
					items: [
						{text: 'Test', link: '/extensions/georgringer-news/test'},
					]
				},
				{
					text: 'typo3/backend',
					collapsible: true,
					collapsed: true,
					items: [
						{text: 'Test', link: '/extensions/typo3-backend/test'},
					]
				},
				{
					text: 'typo3/fluid',
					collapsible: true,
					collapsed: true,
					items: [
						{text: 'Test', link: '/extensions/typo3-fluid/test'},
					]
				},
			]
		}
	}
}

export default config
