import { ContentContainer } from "@/components/Layout"
import { Content } from "@/components/Typography"
import { DONATION_URL } from "@/constants"
import { INTRODUCTION, TAGLINE } from "@/content"
import { Box, Button, Grid, Typography } from "@material-ui/core"
import useIntroductionStyles from "./Introduction.styles"

const Introduction: React.FC = () => {
	const classes = useIntroductionStyles()

	return (
		<ContentContainer>
			<Grid item xs={12}>
				<Typography variant="h4" className={classes.tagline}>
					{TAGLINE}
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Content>
					{INTRODUCTION.map((paragraph, index) => (
						<Typography variant="body1" key={`introduction-${index}`}>
							{paragraph}
						</Typography>
					))}
				</Content>
			</Grid>
			<Grid item xs={12}>
				<Box width="100%" textAlign="center">
					<Button
						variant="contained"
						color="primary"
						href={DONATION_URL}
						target="_blank"
						rel="noopener"
						className={classes.button}
					>
						Support RSVP
					</Button>
				</Box>
			</Grid>
		</ContentContainer>
	)
}

export default Introduction
