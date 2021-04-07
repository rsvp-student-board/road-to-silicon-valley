import { DISCIPLINES } from "@/content"
import { Grid, Typography } from "@material-ui/core"
import useDisciplinesStyles from "./Disciplines.styles"

const Disciplines: React.FC = () => {
	const classes = useDisciplinesStyles()

	return (
		<Grid container spacing={4} justify="center">
			{DISCIPLINES.map((discipline, index) => (
				<Grid item xs={12} sm={6} md={4} key={`discipline-${index}`}>
					<div className={classes.icon}>{discipline.icon}</div>
					<Typography variant="body1" align="center" className={classes.title}>
						{discipline.title}
					</Typography>
				</Grid>
			))}
		</Grid>
	)
}

export default Disciplines
