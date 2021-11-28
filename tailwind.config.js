module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#222335",
				secondary: "#58CB7F",
				teal: "#00FFC2",
				txt: "#C4C4C4",
			},
			dropShadow: {
				text: "4px 4px 0px rgba(0,0,0,1)",
				light: "0 4px 4px rgba(0,0,0,0.45)",
			},
			boxShadow: {
				green: "0px 4px 20px 5px rgba(88, 203, 93, 0.2)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
