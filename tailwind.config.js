import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['"Nunito Sans"']
			},
			typography: {
				DEFAULT: {
					css: {
						color: '#d4d4d4',
						a: {
							color: '#84cc16',
							'&:hover': {
								color: '#a3e635'
							}
						},
						h1: {
							color: '#e5e5e5'
						},
						h2: {
							color: '#e5e5e5'
						},
						h3: {
							color: '#e5e5e5'
						},
						h4: {
							color: '#e5e5e5'
						},
						li: {
							color: '#d4d4d4'
						},
						'li::marker': {
							color: '#d4d4d4'
						},
						ol: {
							color: '#d4d4d4'
						},
						strong: {
							color: '#d4d4d4'
						}
					}
				}
			}
		}
	},

	plugins: [typography]
};
