import { makeStyles } from "@material-ui/core/styles"

interface NavLinkStylesProps {
	active: boolean
	isScrolled: boolean
}

const useNavLinkStyles = makeStyles((theme) => ({
	root: {
		textDecoration: "none",
		"&:hover, &:focus": {
			textDecoration: "none",
		},
	},
	container: {
		paddingLeft: theme.spacing(1),
		paddingRight: theme.spacing(1) - 1,
		margin: theme.spacing(1),
		position: "relative",
		transition: theme.transitions.create(["transform"]),
		"&:hover": {
			"& $typography": {
				opacity: 1,
			},
			"& $highlight": {
				height: "50%",
			},
		},
		"&:active": {
			transform: "scale(0.95)",
		},
		[theme.breakpoints.down("md")]: {
			display: "inline-block",
			marginTop: theme.spacing(2),
			marginBottom: theme.spacing(2),
		},
	},
	typography: ({ active, isScrolled }: NavLinkStylesProps) => ({
		color: isScrolled ? theme.palette.common.black : theme.palette.common.white,
		position: "relative",
		zIndex: 999,
		fontWeight: 600,
		textTransform: "uppercase",
		letterSpacing: 1,
		width: "auto",
		opacity: active ? 1 : 0.85,
		fontSize: theme.typography.fontSize * 2,
		transition: theme.transitions.create(["color", "opacity"]),
		[theme.breakpoints.up("md")]: {
			fontSize: theme.typography.fontSize,
		},
	}),
	highlight: ({ active }: NavLinkStylesProps) => ({
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

export default useNavLinkStyles