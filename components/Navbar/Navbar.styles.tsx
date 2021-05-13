import { makeStyles } from "@material-ui/core/styles"

interface NavbarStylesProps {
	isScrolled: boolean
	isOpen: boolean
}

const useNavbarStyles = makeStyles((theme) => ({
	root: {
		zIndex: 9999,
		display: "flex",
		alignItems: "center",
		backgroundColor: theme.palette.common.black,
		padding: `${theme.spacing(1.5)}px ${theme.spacing(3)}px`,
		transition: theme.transitions.create([
			"background-color",
			"padding",
			"backdrop-filter",
		]),
		[theme.breakpoints.up("md")]: {
			padding: (props: NavbarStylesProps) =>
				props.isScrolled
					? `${theme.spacing(0)}px ${theme.spacing(3)}px`
					: `${theme.spacing(1.5)}px ${theme.spacing(3)}px`,
		},
	},
	toolbar: {
		justifyContent: "space-between",
		maxWidth: theme.breakpoints.values.lg * 1.2,
		width: "100%",
	},
	logo: {
		cursor: "pointer",
		width: "auto",
		height: "2.5rem",
		opacity: 0.85,
		transition: theme.transitions.create(["opacity", "height", "transform"]),
		"&:hover": {
			opacity: 1,
			transform: "scale(1.1)",
		},
		"&:active": {
			transform: "scale(0.95)",
		},
		[theme.breakpoints.up("md")]: {
			height: (props: NavbarStylesProps) =>
				props.isScrolled ? "2.5rem" : "3rem",
		},
	},
	drawer: {
		padding: `${theme.spacing(8) + 88}px ${theme.spacing(
			3.5
		)}px ${theme.spacing(2)}px`,
		backgroundColor: theme.palette.common.black,
		width: "100%",
		zIndex: 9998,
	},
}))

export default useNavbarStyles
