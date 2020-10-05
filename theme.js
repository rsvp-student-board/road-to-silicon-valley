import { createMuiTheme } from "@material-ui/core"

export default createMuiTheme({
	palette: {
		primary: {
			main: "#E18282",
		},
		secondary: {
			main: "#B8E3ED",
		},
		text: {
			primary: "#B8E3ED",
			secondary: "#B3B3B3",
		},
		background: {
			default: "#F5F5F5",
			paper: "#FAFAFA",
		},
	},
	typography: {
		fontFamily: '"Source Sans Pro", "Helvetica", "Arial", "sans-serif"',
		h1: {
			fontFamily: '"Bebas Neue", "Arial", "Helvetica", "sans-serif',
			textTransform: "uppercase",
		},
		h2: {
			fontFamily: '"Bebas Neue", "Arial", "Helvetica", "sans-serif',
			textTransform: "uppercase",
		},
		h3: {
			fontFamily: '"Bebas Neue", "Arial", "Helvetica", "sans-serif',
			textTransform: "uppercase",
		},
		h4: {
			fontFamily: '"Bebas Neue", "Arial", "Helvetica", "sans-serif',
			textTransform: "uppercase",
		},
		h5: {
			fontFamily: '"Bebas Neue", "Arial", "Helvetica", "sans-serif',
			textTransform: "uppercase",
		},
		h6: {
			fontFamily: '"Bebas Neue", "Arial", "Helvetica", "sans-serif',
			textTransform: "uppercase",
		},
	},
	props: {
		MuiButton: {
			variant: "contained",
			color: "primary",
			disableElevation: true,
		},
	},
})
