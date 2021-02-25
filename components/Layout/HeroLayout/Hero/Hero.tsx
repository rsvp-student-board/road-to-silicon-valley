import { SITE_NAME } from "@/constants"
import { Box, Container, Typography } from "@material-ui/core"
import Image from "next/image"
import { Background, Parallax } from "react-parallax"
import useHeroStyles from "./Hero.styles"

interface HeroProps {
	title: string
	imgBase64: string
	imgSrc: string
	imgPosition?: string
}

const Hero: React.FC<HeroProps> = ({
	title,
	imgBase64,
	imgSrc,
	imgPosition,
}) => {
	const classes = useHeroStyles()

	return (
		<Parallax
			strength={400}
			className={classes.root}
			contentClassName={classes.content}
		>
			<Background>
				<img
					aria-hidden="true"
					alt={SITE_NAME}
					src={imgBase64}
					className={classes.blurredImage}
				/>
				<Image
					src={imgSrc}
					alt={SITE_NAME}
					title={SITE_NAME}
					layout="fill"
					objectFit="cover"
					objectPosition={imgPosition || "center center"}
					priority
				/>
			</Background>
			<Container maxWidth="lg">
				<Box
					component="section"
					display="flex"
					justifyContent="center"
					width="100%"
					height="100%"
				>
					<Typography variant="h1" align="center" className={classes.title}>
						{title}
					</Typography>
				</Box>
			</Container>
		</Parallax>
	)
}

export default Hero
