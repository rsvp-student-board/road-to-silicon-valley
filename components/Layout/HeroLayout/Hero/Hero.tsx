import { SITE_NAME } from "@/constants"
import { Box, Container, Grid, Typography } from "@material-ui/core"
import Image from "next/image"
import CountUp from "react-countup"
import { Background, Parallax } from "react-parallax"
import useHeroStyles from "./Hero.styles"

interface HeroProps {
	imgBase64: string
	imgSrc: string
	imgPosition?: string
	content?: {
		description?: string
		subtitle?: string
		numbers?: { title: string; number: number }[]
	}
	title: string
}

const Hero: React.FC<HeroProps> = ({
	title,
	imgBase64,
	imgSrc,
	imgPosition,
	content,
}) => {
	const classes = useHeroStyles()

	return (
		<Parallax
			strength={200}
			className={classes.root}
			contentClassName={classes.content}
		>
			<Background>
				<img
					aria-hidden="true"
					alt={`${title} – ${SITE_NAME}`}
					src={imgBase64}
					className={classes.blurredImage}
				/>
				<Image
					src={imgSrc}
					alt={`${title} – ${SITE_NAME}`}
					layout="fill"
					objectFit="cover"
					objectPosition={imgPosition || "center center"}
					priority
				/>
			</Background>
			<Container maxWidth="md">
				<Box
					component="section"
					display="flex"
					flexDirection="column"
					justifyContent="center"
					color="common.white"
				>
					{content?.subtitle && (
						<Typography variant="h2" className={classes.subtitle}>
							{content.subtitle}
						</Typography>
					)}
					<Typography variant="h1" className={classes.title}>
						{title}
					</Typography>

					{content?.description && (
						<Typography variant="body1" className={classes.description}>
							{content.description}
						</Typography>
					)}
					{content?.numbers && (
						<Grid container className={classes.numbersGrid}>
							{content.numbers.map((numberItem) => (
								<Grid
									item
									xs={6}
									sm={4}
									className={classes.numberGridItem}
									key={`hero-${numberItem.title}-number`}
								>
									<Typography variant="body1" className={classes.numberCounter}>
										<CountUp
											start={0}
											end={numberItem.number}
											duration={5}
											className={classes.numberCounter}
										/>
									</Typography>
									<Typography className={classes.numberTitle}>
										{numberItem.title}
									</Typography>
								</Grid>
							))}
						</Grid>
					)}
				</Box>
			</Container>
		</Parallax>
	)
}

export default Hero
