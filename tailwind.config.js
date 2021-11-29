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
			animation: {
				germ: "germ 12s linear infinite alternate",
				"germ-reverse": "germ 12s linear infinite alternate-reverse",
			},
			keyframes: {
				germ: {
					"0%": { transform: "translate(-1.5rem, -1.5rem)" },
					"25%": {
						transform: "translateX(1.5rem)",
					},
					"50%": {
						transform: "translate(1.5rem, -1.5rem)",
					},
					"75%": {
						transform: "translate(-1.5rem, 2rem)",
					},
					"100%": {
						transform: "translate(2rem, 2rem)",
					},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
