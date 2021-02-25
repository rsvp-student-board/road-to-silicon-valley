import { Box } from "@material-ui/core"
import { NextSeo } from "next-seo"
import ContentContainer from "../ContentContainer"
import Hero from "./Hero/Hero"

interface HeroLayoutProps {
	title: string
	imgBase64: string
	imgSrc: string
	imgPosition?: string
}

const HeroLayout: React.FC<HeroLayoutProps> = ({
	title,
	imgBase64,
	imgSrc,
	imgPosition,
	children,
}) => {
	return (
		<>
			<NextSeo title={title} />
			<Box component="main" minHeight="calc(100vh - 90px)">
				<Hero
					title={title}
					imgBase64={imgBase64}
					imgSrc={imgSrc}
					imgPosition={imgPosition}
				/>
				<ContentContainer>{children}</ContentContainer>
			</Box>
		</>
	)
}

export default HeroLayout
