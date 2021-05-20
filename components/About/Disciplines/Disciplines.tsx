import { DISCIPLINES } from "@/content"
import { Container, Grid, Typography } from "@material-ui/core"
import useDisciplinesStyles from "./Disciplines.styles"

const Disciplines: React.FC = () => {
	const classes = useDisciplinesStyles()

	return (
		<Container maxWidth="sm">
			<Grid container spacing={1}>
				{DISCIPLINES.map((discipline, index) => (
					<Grid
						item
						xs={index === Math.floor(DISCIPLINES.length / 2) ? 12 : 6}
						className={classes.disciplineGridItem}
						key={`discipline ${discipline.title}`}
					>
						<div className={classes.disciplineIcon}>{discipline.icon}</div>
						<Typography variant="body1" className={classes.disciplineTitle}>
							{discipline.title}
						</Typography>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default Disciplines
