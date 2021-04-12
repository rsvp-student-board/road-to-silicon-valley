import { Content, Header, Hyperlink } from "@/components/Typography"
import { MUKESH, MUKESH_BIO } from "@/content"
import { Grid, Typography } from "@material-ui/core"
import Image from "next/image"
import useMukeshInfoStyles from "./MukeshInfo.styles"

interface MukeshInfoProps {
	imgSrc: string
	imgBase64: string
}

const MukeshInfo: React.FC<MukeshInfoProps> = ({ imgBase64, imgSrc }) => {
	const classes = useMukeshInfoStyles()

	return (
		<Grid container spacing={2}>
			<Grid item xs={12} md={8}>
				<Header>{MUKESH}</Header>
				<Content>
					<Typography variant="body1">{MUKESH_BIO}</Typography>
					<Typography variant="body1">
						You can learn more about Professor Patel through his official{" "}
						<Hyperlink href="https://www.business.rutgers.edu/faculty/mukesh-patel">
							Rutgers Business School page
						</Hyperlink>
						.
					</Typography>
				</Content>
			</Grid>
			<Grid item xs={12} md={4}>
				<div className={classes.imageContainer}>
					<img
						aria-hidden="true"
						alt={MUKESH}
						src={imgBase64}
						className={classes.blurredImage}
					/>
					<Image
						src={imgSrc}
						layout="fill"
						alt={MUKESH}
						title={MUKESH}
						quality={30}
						objectFit="cover"
						objectPosition="center center"
					/>
				</div>
			</Grid>
		</Grid>
	)
}

export default MukeshInfo
