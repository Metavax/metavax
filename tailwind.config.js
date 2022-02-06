module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				primary: "#222335",
				secondary: "#85B089",
				teal: "#00FFC2",
				txt: "#C4C4C4",
			},
			dropShadow: {
				text: "4px 4px 0px rgba(0,0,0,1)",
				light: "0 4px 4px rgba(0,0,0,0.45)",
			},
			boxShadow: {
				green: "0px 4px 20px 5px rgba(88, 203, 93, 0.2)",
				hrash: "0px 4px 4px rgba(0, 0, 0, 0.25);",
			},
			fontFamily: {
				heading: ["Catamaran", "sans-serif"],
				sub: ["Raleway", "sans-serif"],
				body: ["Bai Jamjuree", "sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
