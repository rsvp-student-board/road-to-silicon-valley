import { MEMBERSHIP_BENEFITS } from "@/content"
import { Paper, Typography, useTheme } from "@material-ui/core"
import Masonry from "react-masonry-css"
import useMembershipBenefitsStyles from "./MembershipBenefits.styles"

const MembershipBenefits: React.FC = () => {
	const theme = useTheme()
	const breakpoints = {
		default: 2,
		// [theme.breakpoints.values.md]: 2,
		[theme.breakpoints.values.sm]: 1,
	}

	const classes = useMembershipBenefitsStyles()

	return (
		<Masonry
			breakpointCols={breakpoints}
			className={classes.root}
			columnClassName={classes.col}
		>
			{MEMBERSHIP_BENEFITS.map((benefit) => (
				<Paper className={classes.gridItem} key={`benefit-${benefit.title}`}>
					<Typography variant="body1" className={classes.title}>
						{benefit.title}
					</Typography>
					<Typography variant="body1" className={classes.description}>
						{benefit.description}
					</Typography>
					<div className={classes.icon}>{benefit.icon}</div>
				</Paper>
			))}
		</Masonry>
	)
}

export default MembershipBenefits
