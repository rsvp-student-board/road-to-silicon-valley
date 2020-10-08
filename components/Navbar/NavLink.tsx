import { makeStyles, Theme, Typography } from "@material-ui/core"
import Link from "next/link"
import { useRouter } from "next/router"

interface NavLinkStyleProps {
	active: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		cursor: "pointer",
		paddingLeft: theme.spacing(1),
		paddingRight: theme.spacing(1) - 1,
		margin: theme.spacing(1),
		position: "relative",
		transition: theme.transitions.create(["transform"]),
		"&:hover": {
			"& $typography": {
				color: theme.palette.text.primary,
			},
			"& $highlight": {
				height: "50%",
			},
		},
		"&:active": {
			transform: "scale(0.9)",
		},
		[theme.breakpoints.down("md")]: {
			display: "inline-block",
			marginTop: theme.spacing(2),
			marginBottom: theme.spacing(2),
		},
	},
	typography: ({ active }: NavLinkStyleProps) => ({
		position: "relative",
		zIndex: 999,
		fontWeight: 600,
		textTransform: "uppercase",
		letterSpacing: 1,
		width: "auto",
		color: active ? theme.palette.text.primary : theme.palette.text.secondary,
		transition: theme.transitions.create(["color"]),
		[theme.breakpoints.down("md")]: {
			fontSize: theme.typography.fontSize * 2,
		},
	}),
	highlight: ({ active }: NavLinkStyleProps) => ({
		position: "absolute",
		bottom: 0,
		left: 0,
		zIndex: 998,
		width: "100%",
		height: active ? "50%" : 0,
		backgroundColor: active
			? theme.palette.secondary.main
			: theme.palette.primary.main,
		transition: theme.transitions.create(["background-color", "height"]),
	}),
}))

interface NavLinkProps {
	displayText: string
	href: string
}

const NavLink: React.FC<NavLinkProps> = ({ displayText, href }) => {
	const router = useRouter()
	const classes = useStyles({
		active: router.pathname === href,
	})

	return (
		<Link href={href}>
			<div className={classes.root}>
				<Typography className={classes.typography} variant="body1">
					{displayText}
				</Typography>
				<div className={classes.highlight} />
			</div>
		</Link>
	)
}

export default NavLink
