import { INVOLVEMENT_CATEGORIES } from "@/content"
import { Box, Grid, Typography } from "@material-ui/core"
import useInvolvementCategoriesStyles from "./InvolvementCategories.styles"

const InvolvementCategories: React.FC = () => {
	const classes = useInvolvementCategoriesStyles()

	return (
		<Grid container spacing={2}>
			{INVOLVEMENT_CATEGORIES.map((category) => (
				<Grid
					item
					xs={6}
					sm={3}
					className={classes.gridItem}
					key={`involvement-category-${category.title}`}
				>
					<Box width="100%" display="flex" justifyContent="center">
						<div className={classes.icon}>{category.icon}</div>
					</Box>
					<Typography variant="h4" className={classes.title}>
						{category.title}
					</Typography>
					<Typography variant="body1" className={classes.description}>
						{category.description}
					</Typography>
				</Grid>
			))}
		</Grid>
	)
}

export default InvolvementCategories
