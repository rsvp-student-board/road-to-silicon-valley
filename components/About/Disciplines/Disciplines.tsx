import { DISCIPLINES } from "@/content"
import { Box, Grid, Typography } from "@material-ui/core"
import useDisciplinesStyles from "./Disciplines.styles"

const Disciplines: React.FC = () => {
	const classes = useDisciplinesStyles()

	return (
		<Grid container spacing={2} justify="center">
			{DISCIPLINES.map((discipline, index) => (
				<Grid item xs={12} sm={6} md={4} key={`discipline-${index}`}>
					<Box className={classes.container}>
						<Typography variant="body1" className={classes.title}>
							{discipline.title}
						</Typography>
						{discipline.icon}
					</Box>
				</Grid>
			))}
		</Grid>
	)
}

export default Disciplines
