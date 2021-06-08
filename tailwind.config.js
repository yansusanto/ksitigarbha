const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

module.exports = {
	mode: "jit",
	purge: ["./src/**/*.njk", "./src/**/*.md", "./src/**/*.js", "./.*.js"],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		colors: {
			gray: colors.blueGray,
			purple: colors.purple,
			orange: colors.orange,
			rose: colors.rose,
			blue: colors.blue,
			green: colors.green,
			yellow: colors.yellow,
			white: colors.white,
			black: "#1f2937",
			current: "currentColor",
			transparent: "transparent",
		},
		fontFamily: {
			sans: [
				"Inter",
				"ui-sans-serif",
				"system-ui",
				"-apple-system",
				"BlinkMacSystemFont",
				"Segoe UI",
				"Roboto",
				"Helvetica Neue",
				"Arial",
				"Noto Sans",
				"sans-serif",
				"Apple Color Emoji",
				"Segoe UI Emoji",
				"Segoe UI Symbol",
				"Noto Color Emoji",
			],
			serif: [
				"ui-serif",
				"Georgia",
				"Cambria",
				"Times New Roman",
				"Times",
				"serif",
			],
		},
	},
	variants: {
		backgroundColor: ["responsive", "dark", "focus", "active", "hover"],
		extend: {space: ["last"]},
	},
	plugins: [
		require("@tailwindcss/forms"),
		// ...
	],
};
