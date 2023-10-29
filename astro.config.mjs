import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'RMRK Documentation',
			logo: {
				src: './src/assets/small_pink_trans.png',
			},
			editLink: {
				baseUrl: 'https://github.com/rmrk-team/rmrk-docs/edit/main/',
			},
			customCss: [
				// Relative path to your custom CSS file
				'./src/style/custom.css',
			],
			social: {
				github: 'https://github.com/rmrk-team/rmrk-docs',
				'x.com': 'https://x.com/rmrkapp',
				youtube: 'https://youtube.com/@rmrk',
			},
			head: [
				{
				  tag: 'script',
				  attrs: {
					src: 'https://plausible.io/js/script.js',
					'data-domain': 'docs.rmrk.app',
					defer: true,
				  },
				},
			  ],
			  favicon: './src/assets/rmrk_symbol.svg',
			sidebar: [
				{
					label: 'Tutorials',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', link: '/tutorials/intro/' },
					],
				},
				{
					label: 'How-To Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', link: '/guides/intro/' },
					],
				},
				{
					label: 'Explanations',
					autogenerate: { directory: 'explanations' },
				},
				{
					label: 'Reference',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', link: '/reference/intro/' },
					],
				},
			],
		}),
	],
});
