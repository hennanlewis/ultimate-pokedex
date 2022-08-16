/** @type {import('tailwindcss').Config} */

const colorWithOpacity = (variableName) => {
	return ({ opacityValue }) => {
		if (opacityValue) {
			return `rgba(var(${variableName}), ${opacityValue})`
		}
		return `rgba(var(${variableName}))`
	}
}

module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
			colors: {
				"typecolor": colorWithOpacity("--typecolor"),
				"typecolordark": colorWithOpacity("--typecolordark"),
			},
			text: {
				shadow: "0 2px 4px #000"
			},
			screens: {
				sm: "480px",
				md: "768px",
				lg: "976px",
				xl: "1280px",
				"2xl": "1440px"
			},
		},
	},
	plugins: [
		require('tailwind-scrollbar'),
	],
}