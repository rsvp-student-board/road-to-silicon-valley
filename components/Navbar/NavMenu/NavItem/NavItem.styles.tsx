import { makeStyles } from "@material-ui/core/styles"

interface NavItemStylesProps {
	isActive: boolean | undefined
	isDropdown: boolean
	isSubMenuOpen: boolean
}

const useNavItemStyles = makeStyles((theme) => ({
	directLink: {
		display: "inline-block",
		textDecoration: "none",
		transition: theme.transitions.create("transform"),
		"&:hover, &:focus": {
			textDecoration: "none",
		},
	},
	container: {
		padding: `${theme.spacing(1)}px ${theme.spacing(1) - 1}px 
					${theme.spacing(1)}px ${theme.spacing(1)}px`,
		marginBottom: theme.spacing(2),
		position: "relative",
		zIndex: 10001,
		cursor: () => "pointer",
		transition: theme.transitions.create(["transform"]),
		"&:hover": {
			"& $typography": {
				opacity: 1,
				color: (props: NavItemStylesProps) =>
					props.isActive
						? theme.palette.secondary.main
						: theme.palette.primary.main,
				[theme.breakpoints.up("md")]: {
					color: (props: NavItemStylesProps) =>
						props.isActive
							? theme.palette.secondary.main
							: theme.palette.common.white,
				},
			},
			"& $highlight": {
				width: "90%",
			},
			"& $sublist": {
				display: "block",
			},
		},
		[theme.breakpoints.up("md")]: {
			margin: theme.spacing(1),
			display: "block",
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
		zIndex: 10003,
		fontWeight: 600,
		textTransform: "uppercase",
		letterSpacing: 1,
		lineHeight: 1,
		width: "auto",
		opacity: (props: NavItemStylesProps) => (props.isActive ? 1 : 0.65),
		fontSize: theme.typography.body1.fontSize,
		transition: theme.transitions.create(["color", "opacity", "text-shadow"]),
		[theme.breakpoints.up("sm")]: {
			fontSize: theme.typography.fontSize * 1.5,
		},
		[theme.breakpoints.up("md")]: {
			fontSize: theme.typography.fontSize,
		},
	},
	dropdownIcon: {
		transform: (props: NavItemStylesProps) =>
			props.isSubMenuOpen ? "none" : "rotate(-90deg)",
		marginBottom: -2,
		transition: theme.transitions.create("transform"),
		[theme.breakpoints.up("md")]: {
			transform: () => "none",
		},
	},
	highlight: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "block",
			position: "absolute",
			bottom: 0,
			left: "50%",
			zIndex: 10002,
			height: 2,
			width: (props: NavItemStylesProps) => (props.isActive ? "90%" : 0),
			transform: "translateX(-50%)",
			backgroundColor: (props: NavItemStylesProps) =>
				props.isActive
					? theme.palette.secondary.main
					: theme.palette.primary.main,
			transition: theme.transitions.create(["background-color", "width"]),
		},
	},
	sublist: {
		display: "block",
		maxHeight: (props: NavItemStylesProps) => (props.isSubMenuOpen ? 200 : 0),
		width: (props: NavItemStylesProps) => (props.isSubMenuOpen ? "auto" : 0),
		overflow: "hidden",
		paddingTop: theme.spacing(1.5),
		paddingLeft: theme.spacing(1.5),
		transition: theme.transitions.create(["max-height", "opacity"]),
		marginBottom: theme.spacing(-1),
		[theme.breakpoints.up("md")]: {
			display: "none",
			position: "absolute",
			maxHeight: () => "none",
			width: () => "auto",
			top: "100%",
			left: -10,
			zIndex: 10000,
			paddingTop: theme.spacing(2.5),
			paddingBottom: theme.spacing(1),
			paddingLeft: 0,
			marginBottom: 0,
			backgroundColor: theme.palette.common.black,
		},
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
		[theme.breakpoints.up("sm")]: {
			fontSize: theme.typography.fontSize * 1.5,
		},
		[theme.breakpoints.up("md")]: {
			fontSize: theme.typography.fontSize,
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
