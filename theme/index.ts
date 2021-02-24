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
		},
		common: {
			white: "#F9F9F9",
			black: "#030301",
		},
	},
	typography: {
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
		fontSize: 16,
	},
})

export default theme
