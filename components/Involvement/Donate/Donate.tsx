import Button from "@/components/Button"
import { DONATION_URL } from "@/constants"
import { Box, Grid, Typography } from "@material-ui/core"
import useDonateStyles from "./Donate.styles"

const Donate: React.FC = () => {
	const classes = useDonateStyles()

	return (
		<Grid item xs={12} className={classes.root}>
			<Box position="relative" width="100%" height="100%">
				<Box className={classes.container}>
					{/* <Typography variant="h3" className={classes.header}>
						Invest in RSVP
					</Typography> */}
					<Typography variant="body1" className={classes.description}>
						Through the RBS Road to Silicon V/Alley Fund and the RSVP Seed Grant
						Fund, you can contribute to the success of RSVP's students without
						committing to becoming a full-time partner.
					</Typography>
					<Button
						href={DONATION_URL}
						bgColor="dark"
						target="_blank"
						rel="noopener"
						size="large"
					>
						Support RSVP
					</Button>
				</Box>
			</Box>
		</Grid>
	)
}

export default Donate
