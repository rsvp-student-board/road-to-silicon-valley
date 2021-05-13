import { fade, makeStyles } from "@material-ui/core/styles"

const useLandingStyles = makeStyles((theme) => ({
	root: {
		height: "80vh",
		width: "100%",
		"& .react-parallax-background-children": {
			width: "100%",
			height: "100%",
		},
		[theme.breakpoints.up("sm")]: {
			height: "90vh",
		},
		[theme.breakpoints.up("md")]: {
			height: "100vh",
		},
	},
	background: {
		height: "100%",
		width: "100%",
		position: "relative",
		overflow: "hidden",
	},
	blurredImage: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		width: "100%",
		height: "100%",
		objectFit: "cover",
		objectPosition: "center",
		filter: "blur(2rem)",
		transform: "scale(1.2)",
	},
	content: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		width: "100%",
		height: "100%",
		color: theme.palette.common.white,
		textShadow: `2px 2px 6px ${fade(theme.palette.common.black, 1)}`,
		background:
			`linear-gradient(to bottom, ${fade(
				theme.palette.common.black,
				0.675
			)} 75%, ${theme.palette.common.black})` ||
			fade(theme.palette.common.black, 0.675),
	},
	container: {
		paddingLeft: theme.spacing(4),
		paddingRight: theme.spacing(4),
		position: "relative",
		marginTop: 265,
		[theme.breakpoints.up("md")]: {
			paddingLeft: theme.spacing(10),
		},
	},
	title: {
		fontWeight: 400,
		lineHeight: 1,
		fontSize: "calc(2rem + 3vw)",
		// color: theme.palette.primary.main,
		marginBottom: theme.spacing(1.5),
		marginTop: theme.spacing(-6),
		[theme.breakpoints.up("sm")]: {
			fontSize: theme.typography.fontSize * 5,
			marginBottom: theme.spacing(3),
		},
	},
	subtitle: {
		fontWeight: 700,
		fontSize: theme.typography.fontSize * 1.25,
		color: theme.palette.primary.main,
		textTransform: "uppercase",
		fontFamily: theme.typography.body1.fontFamily,
		letterSpacing: 1,
		"& span": {
			display: "none",
		},
		[theme.breakpoints.up("sm")]: {
			fontSize: theme.typography.fontSize * 1.75,
			"& span": {
				display: "inline-block",
			},
		},
	},
	excerptContainer: {
		maxWidth: `min(calc(100vw - ${theme.spacing(8)}px), 600px)`,
		position: "absolute",
		top: 175,
		marginLeft: 0,
		[theme.breakpoints.up("sm")]: {
			top: 300,
		},
	},
	excerpt: {
		fontSize: theme.typography.fontSize + 2,
		[theme.breakpoints.up("sm")]: {
			fontSize: theme.typography.fontSize * 1.25,
		},
	},
	buffer: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "block",
		},
	},
}))

export default useLandingStyles
