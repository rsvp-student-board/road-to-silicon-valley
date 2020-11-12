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
			primary: "#030301",
			secondary: "#676766",
		},
		background: {
			default: "#F5F5F5",
			paper: "#FAFAFA",
		},
	},
	typography: {
		fontFamily: "Aileron",
		h1: {
			fontFamily: "Aileron",
			textTransform: "uppercase",
			fontWeight: 100,
		},
		h2: {
			fontFamily: "Aileron",
			textTransform: "uppercase",
		},
		h3: {
			fontFamily: "Aileron",
			textTransform: "uppercase",
		},
		h4: {
			fontFamily: "Aileron",
			textTransform: "uppercase",
		},
		h5: {
			fontFamily: "Aileron",
			textTransform: "uppercase",
		},
		h6: {
			fontFamily: "Aileron",
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
