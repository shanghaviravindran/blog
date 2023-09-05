/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// add font
			fontFamily:{
				sans:['Inter','Helvetica','Arial','sans-serif']
			}
		},
	},
	plugins: [
		//add tailwind typography
		require('@tailwindcss/typography')
	],
}
