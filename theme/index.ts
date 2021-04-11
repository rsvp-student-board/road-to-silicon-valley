import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#E18282",
		},
		secondary: {
			main: "#B8E3ED",
		},
		text: {
			primary: "#030301",
			secondary: "#B3B3B3",
		},
		background: {
			default: "#F9F9F9",
			paper: "#FDFDFD",
		},
		common: {
			white: "#F9F9F9",
			black: "#030301",
		},
	},
	typography: {
		fontFamily: [
			'"Bitter"',
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		body1: {
			fontFamily: [
				'"Inter"',
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(","),
		},
		button: {
			fontFamily: [
				'"Inter"',
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(","),
		},
		// fontSize: 16,
	},
	props: {
		MuiButton: {
			disableElevation: true,
		},
	},
	overrides: {
		MuiCssBaseline: {
			"@global": {
				html: {
					scrollBehavior: "smooth",
				},
				body: {
					scrollBehavior: "smooth",
				},
			},
		},
	},
})

export default theme
