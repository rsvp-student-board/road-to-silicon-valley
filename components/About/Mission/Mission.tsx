import { Box, Grid, Typography } from "@material-ui/core"
import useMissionStyles from "./Mission.styles"

const Mission: React.FC = () => {
	const classes = useMissionStyles()

	return (
		<Grid item xs={12} className={classes.root}>
			<Box position="relative" width="100%" height="100%">
				<Box className={classes.container}>
					<Typography variant="h3" className={classes.header}>
						Our Mission
					</Typography>
					<Typography variant="body1" className={classes.mission}>
						Empowering Rutgers Students to create pathways to leadership
						opportunities at innovative companies and pursue entrepreneurial
						ambitions.
					</Typography>
				</Box>
			</Box>
		</Grid>
	)
}

export default Mission
