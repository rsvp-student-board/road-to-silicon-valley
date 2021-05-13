import { NUMBERS } from "@/content"
import { Box, Container, Grid, Typography } from "@material-ui/core"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import useNumbersStyles from "./Numbers.styles"

const Numbers: React.FC = () => {
	const [ref, inView] = useInView({
		threshold: 0.3,
		triggerOnce: true,
	})
	const classes = useNumbersStyles()

	return (
		<Box width="100%" bgcolor="common.black" color="common.white" py={6}>
			<Container maxWidth="md" className={classes.root} ref={ref}>
				<Grid container>
					{NUMBERS.map((numberItem, index) => (
						<Grid
							item
							xs={6}
							sm={3}
							className={classes.gridItem}
							key={`numbers-${index}`}
						>
							<Typography variant="body1">
								<CountUp
									start={0}
									end={inView ? numberItem.number : 0}
									duration={5}
									className={classes.countup}
								/>
							</Typography>
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
