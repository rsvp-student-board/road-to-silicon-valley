import { fade, makeStyles } from "@material-ui/core/styles"

interface NavbarStylesProps {
	isScrolled: boolean
	isOpen: boolean
}

const useNavbarStyles = makeStyles((theme) => ({
	root: {
		zIndex: 9999,
		display: "flex",
		alignItems: "center",
		backgroundColor: (props: NavbarStylesProps) =>
			props.isScrolled && !props.isOpen
				? fade(theme.palette.background.default, 0.4)
				: "transparent",
		padding: `${theme.spacing(1.5)}px ${theme.spacing(3)}px`,
		backdropFilter: (props: NavbarStylesProps) =>
			props.isScrolled && !props.isOpen ? "saturate(180%) blur(10px)" : "none",
		transition: theme.transitions.create([
			"background-color",
			"padding",
			"backdrop-filter",
		]),
		[theme.breakpoints.up("md")]: {
			backgroundColor: (props: NavbarStylesProps) =>
				props.isScrolled
					? fade(theme.palette.background.default, 0.4)
					: "transparent",
			backdropFilter: (props: NavbarStylesProps) =>
				props.isScrolled ? "saturate(180%) blur(10px)" : "none",
			padding: (props: NavbarStylesProps) =>
				props.isScrolled
					? `${theme.spacing(0)}px ${theme.spacing(3)}px`
					: `${theme.spacing(1.5)}px ${theme.spacing(3)}px`,
		},
	},
	toolbar: {
		justifyContent: "space-between",
		maxWidth: theme.breakpoints.values.lg,
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
		padding: `${theme.spacing(1) + 60}px ${theme.spacing(
			7.5
		)}px ${theme.spacing(2)}px`,
		backgroundColor: fade(theme.palette.background.default, 0.4),
		backdropFilter: "saturate(180%) blur(10px)",
		zIndex: 9998,
	},
}))

export default useNavbarStyles
