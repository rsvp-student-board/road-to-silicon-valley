import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import theme from "@/theme"
import { CssBaseline, ThemeProvider } from "@material-ui/core"
import { Base64 } from "@plaiceholder/base64"
import { DefaultSeo } from "next-seo"
import { AppProps } from "next/app"
import { useEffect } from "react"
import "react-big-calendar/lib/sass/styles.scss"
import SEO from "../next-seo.config"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side")
		if (jssStyles) {
			jssStyles.parentElement?.removeChild(jssStyles)
		}
	}, [])

	return (
		<>
			<DefaultSeo {...SEO} />
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</>
	)
}

export default App

export interface BlurredImgProps {
	[key: string]: {
		imgBase64: Base64
		imgSrc: string
	}
}
