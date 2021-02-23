import { Link, Typography } from "@material-ui/core"
import useNavLinkStyles from "./NavLink.styles"

interface NavLinkProps {
	title: string
	active: boolean
	isScrolled: boolean
	onClick: () => void
}

const NavLink: React.FC<NavLinkProps> = ({
	active,
	isScrolled,
	onClick,
	title,
}) => {
	const classes = useNavLinkStyles({ active, isScrolled })

	return (
		<Link component="button" onClick={onClick} className={classes.root}>
			<div className={classes.container}>
				<Typography className={classes.typography} variant="body1">
					{title}
				</Typography>
				<div className={classes.highlight} />
			</div>
		</Link>
	)
}

export default NavLink
