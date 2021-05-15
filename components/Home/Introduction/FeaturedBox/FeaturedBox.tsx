import Button from "@/components/Button"
import { Content } from "@/components/Typography"
import { Box, Typography } from "@material-ui/core"
import Image from "next/image"
import Link from "next/link"
import useFeaturedBoxStyles from "./FeaturedBox.styles"

interface FeaturedBoxProps {
	imgBase64: string
	imgSrc: string
	title: string
	link: string
	alternateColor?: boolean
}

const FeaturedBox: React.FC<FeaturedBoxProps> = ({
	imgBase64,
	imgSrc,
	alternateColor,
	title,
	link,
	children,
}) => {
	const classes = useFeaturedBoxStyles({
		contentContainerBackground: alternateColor ? "secondary" : "primary",
	})

	return (
		<Box
			width="100%"
			position="relative"
			zIndex={10}
			overflow="hidden"
			display="flex"
			justifyContent="flex-end"
			className={classes.root}
		>
			<img
				aria-hidden="true"
				alt={`RSVP – ${title}`}
				src={imgBase64}
				className={classes.blurredImage}
			/>
			<Image
				layout="fill"
				src={imgSrc}
				objectFit="cover"
				quality={30}
				className={classes.image}
			/>
			<Box
				height="100%"
				width="100%"
				position="absolute"
				zIndex={11}
				className={classes.overlay}
			/>
			<Box position="relative" zIndex={12} className={classes.contentContainer}>
				<Typography variant="h4" className={classes.title}>
					{title}
				</Typography>
				<Box mt={2} className={classes.content}>
					<Content>
						<Typography variant="body1" className={classes.description}>
							{children}
						</Typography>
						<Link href={link} passHref>
							<Button plain>Learn More</Button>
						</Link>
					</Content>
				</Box>
			</Box>
		</Box>
	)
}

export default FeaturedBox
