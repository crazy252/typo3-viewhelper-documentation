/** @type {import('vitepress').UserConfig} */
const config = {
	base: 'https://crazy252.github.io/typo3-viewhelper-documentation/',
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
						{text: 'Test', link: '/extensions/fluidtypo3-flux/test'},
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
