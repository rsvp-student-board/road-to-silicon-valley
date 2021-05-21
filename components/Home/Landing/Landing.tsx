import { SITE_NAME } from "@/constants"
import { Box, Container, Typography } from "@material-ui/core"
import Image from "next/image"
import { Background, Parallax } from "react-parallax"
import useLandingStyles from "./Landing.styles"

interface LandingProps {
	imgBase64: string
	imgSrc: string
}

const Landing: React.FC<LandingProps> = ({ imgBase64, imgSrc }) => {
	const classes = useLandingStyles()

	return (
		<>
			<Parallax
				strength={200}
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
						quality={30}
						layout="fill"
						objectFit="cover"
						objectPosition="center center"
						priority
					/>
				</Background>
				<Container maxWidth="lg" className={classes.container}>
					<Typography variant="h1" className={classes.title}>
						Students. <br />
						Entrepreneurs. <br />
						Dreamers.
					</Typography>
					<Typography variant="h2" className={classes.subtitle}>
						Road to Silicon V/Alley <span>Program</span>
					</Typography>
					<div className={classes.excerptContainer}>
						<Typography variant="body1" className={classes.excerpt}>
							The Road to Silicon V/Alley Program empowers Rutgers students to
							create pathways to leadership opportunities at innovative
							companies and pursue entrepreneurial ambitions.
						</Typography>
					</div>
				</Container>
			</Parallax>
			<Box
				width="100%"
				bgcolor="common.black"
				height={300}
				className={classes.buffer}
			/>
		</>
	)
}

export default Landing
