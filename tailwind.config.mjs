/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				caseAVIS: "#d81931",
				caseGallup: "#066807",
				caseADL: "#035288",
				caseDunkin: "#ca5283",
				casePwC: "#d87e1d",
			}
		},
	},
	plugins: [],
}
