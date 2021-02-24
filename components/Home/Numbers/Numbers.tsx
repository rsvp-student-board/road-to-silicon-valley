import { NUMBERS } from "@/content"
import { Box, Container, Grid, Typography } from "@material-ui/core"
import CountUp from "react-countup"
import useNumbersStyles from "./Numbers.styles"

const Numbers: React.FC = () => {
	const classes = useNumbersStyles()

	return (
		<Box
			component="section"
			width="100%"
			py={1.5}
			bgcolor="common.black"
			color="common.white"
		>
			<Container maxWidth="md">
				<Grid container>
					{NUMBERS.map((numberItem, index) => (
						<Grid
							item
							xs={6}
							sm={3}
							className={classes.gridItem}
							key={`numbers-${index}`}
						>
							<CountUp
								end={numberItem.number}
								duration={5}
								className={classes.countup}
							/>
							<Typography className={classes.title}>
								{numberItem.title}
							</Typography>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	)
}

export default Numbers
