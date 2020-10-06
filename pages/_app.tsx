import { CssBaseline } from "@material-ui/core"
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles"
import GoogleFonts from "next-google-fonts"
import { DefaultSeo } from "next-seo"
import NextApp from "next/app"
import { ThemeProvider as SCThemeProvider } from "styled-components"
import Navbar from "../components/Navbar/Navbar"
import SEO from "../next-seo.config"
import theme from "../theme"

export default class App extends NextApp {
	componentDidMount() {
		const jssStyles = document.querySelector("#jss-server-side")
		if (jssStyles && jssStyles.parentNode)
			jssStyles.parentNode.removeChild(jssStyles)
	}

	render() {
		const { Component, pageProps } = this.props
		// const Layout = Component.Layout || DefaultLayout

		return (
			<>
				<DefaultSeo {...SEO} />
				<GoogleFonts href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Source+Sans+Pro:ital,wght@0,200;0,400;0,700;0,900;1,200;1,400;1,600;1,900&display=swap" />
				<MaterialThemeProvider theme={theme}>
					<CssBaseline />
					<SCThemeProvider theme={theme}>
						<Navbar />
						<Component {...pageProps} />
					</SCThemeProvider>
				</MaterialThemeProvider>
			</>
		)
	}
}
