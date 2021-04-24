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
					<Box width="100%" textAlign="center">
						<Button
							variant="outlined"
							color="primary"
							href={DONATION_URL}
							target="_blank"
							rel="noopener"
						>
							Support RSVP
						</Button>
					</Box>
				</Content>
			</Grid>
		</ContentContainer>
	)
}

export default Introduction
