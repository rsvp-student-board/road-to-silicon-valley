import { fade, makeStyles } from "@material-ui/core/styles"

interface NavbarStylesProps {
	isScrolled: boolean
	isOpen: boolean
}

const useNavbarStyles = makeStyles((theme) => ({
	root: {
		zIndex: 9999,
		backgroundColor: (props: NavbarStylesProps) =>
			props.isScrolled && !props.isOpen
				? fade(theme.palette.background.default, 0.7)
				: "transparent",
		padding: `${theme.spacing(1.5)}px ${theme.spacing(5)}px`,
		backdropFilter: (props: NavbarStylesProps) =>
			props.isScrolled && !props.isOpen ? "saturate(180%) blur(20px)" : "none",
		transition: theme.transitions.create([
			"background-color",
			"padding",
			"backdrop-filter",
		]),
		[theme.breakpoints.up("md")]: {
			backgroundColor: (props: NavbarStylesProps) =>
				props.isScrolled
					? fade(theme.palette.background.default, 0.7)
					: "transparent",
			backdropFilter: (props: NavbarStylesProps) =>
				props.isScrolled ? "saturate(180%) blur(20px)" : "none",
			padding: (props: NavbarStylesProps) =>
				props.isScrolled
					? `${theme.spacing(0)}px ${theme.spacing(5)}px`
					: `${theme.spacing(1.5)}px ${theme.spacing(5)}px`,
		},
	},
	toolbar: {
		justifyContent: "space-between",
	},
	logo: {
		cursor: "pointer",
		opacity: 0.85,
		transition: theme.transitions.create(["opacity", "transform"]),
		"&:hover": {
			opacity: 1,
			transform: "scale(1.1)",
		},
		"&:active": {
			transform: "scale(1.05)",
		},
	},
	drawer: {
		padding: `${theme.spacing(1) + 60}px ${theme.spacing(
			7.5
		)}px ${theme.spacing(2)}px`,
		backgroundColor: fade(theme.palette.background.default, 0.7),
		backdropFilter: "saturate(180%) blur(20px)",
		zIndex: 9998,
	},
}))

export default useNavbarStyles
