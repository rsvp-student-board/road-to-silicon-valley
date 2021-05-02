import { makeStyles } from "@material-ui/core/styles"

interface NavItemStylesProps {
	isActive: boolean | undefined
	isDropdown: boolean
	isSubMenuOpen: boolean
}

const useNavItemStyles = makeStyles((theme) => ({
	directLink: {
		textDecoration: "none",
		transition: theme.transitions.create("transform"),
		"&:active": {
			transform: "scale(0.95)",
		},
		"&:hover, &:focus": {
			textDecoration: "none",
		},
	},
	container: {
		padding: `${theme.spacing(1)}px ${theme.spacing(1) - 1}px 
					${theme.spacing(1)}px ${theme.spacing(1)}px`,
		margin: theme.spacing(1),
		position: "relative",
		cursor: "pointer",
		transition: theme.transitions.create(["transform"]),
		"&:hover": {
			"& $typography": {
				opacity: 1,
			},
			"& $highlight": {
				width: "90%",
			},
			"& $sublist": {
				display: "block",
			},
		},
		[theme.breakpoints.down("md")]: {
			display: "inline-block",
			marginTop: theme.spacing(2),
			marginBottom: theme.spacing(2),
		},
		[theme.breakpoints.up("md")]: {
			cursor: (props: NavItemStylesProps) =>
				props.isDropdown ? "default" : "pointer",
		},
	},
	typography: {
		color: (props: NavItemStylesProps) =>
			props.isActive
				? theme.palette.secondary.main
				: theme.palette.common.white,
		position: "relative",
		zIndex: 999,
		fontWeight: 600,
		textTransform: "uppercase",
		letterSpacing: 1,
		lineHeight: 1,
		width: "auto",
		opacity: (props: NavItemStylesProps) => (props.isActive ? 1 : 0.65),
		fontSize: theme.typography.fontSize * 2,
		transition: theme.transitions.create(["color", "opacity", "text-shadow"]),
		[theme.breakpoints.up("md")]: {
			fontSize: theme.typography.fontSize,
		},
	},
	dropdownIcon: {
		marginBottom: -2,
		// transform: "rotate(-90deg)",
	},
	highlight: {
		position: "absolute",
		bottom: 0,
		left: "50%",
		zIndex: 998,
		height: 2,
		width: (props: NavItemStylesProps) => (props.isActive ? "90%" : 0),
		transform: "translateX(-50%)",
		backgroundColor: (props: NavItemStylesProps) =>
			props.isActive
				? theme.palette.secondary.main
				: theme.palette.primary.main,
		transition: theme.transitions.create(["background-color", "width"]),
	},
	sublist: {
		display: (props: NavItemStylesProps) =>
			props.isSubMenuOpen ? "block" : "none",
		position: "absolute",
		top: "100%",
		left: -20,
		paddingTop: theme.spacing(2.5),
		paddingBottom: theme.spacing(1),
		backgroundColor: theme.palette.common.black,
	},
	sublistLink: {
		display: "block",
		textDecoration: "none",
		padding: `${theme.spacing(1)}px ${theme.spacing(2.5)}px`,
		opacity: 0.65,
		color: theme.palette.common.white,
		whiteSpace: "nowrap",
		fontWeight: 500,
		transition: theme.transitions.create(["opacity", "color"]),
		"&:hover, &:focus": {
			textDecoration: "none",
		},
		"&:hover": {
			opacity: 1,
			color: theme.palette.primary.main,
		},
	},
	activeSublistLink: {
		opacity: 1,
		color: theme.palette.secondary.main,
		"&:hover": {
			color: theme.palette.secondary.main,
		},
	},
}))

export default useNavItemStyles
