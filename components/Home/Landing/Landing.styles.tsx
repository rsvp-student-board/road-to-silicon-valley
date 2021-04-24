import { fade, makeStyles } from "@material-ui/core/styles"

const useLandingStyles = makeStyles((theme) => ({
	root: {
		height: "60vh",
		width: "100%",
		"& .react-parallax-background-children": {
			width: "100%",
			height: "100%",
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
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
		textAlign: "center",
		color: theme.palette.common.white,
		textShadow: `2px 2px 6px ${fade(theme.palette.common.black, 0.4)}`,
		backgroundColor: fade(theme.palette.common.black, 0.6),
	},
	title: {
		fontWeight: 450,
		fontSize: "calc(3rem + 2.5vw)",
		fontVariant: "small-caps",
		letterSpacing: 1,
		lineHeight: 1.1,
		marginBottom: theme.spacing(1.5),
	},
	subtitle: {
		fontWeight: "normal",
		fontSize: "calc(1.5rem + 1.5vw)",
		fontStyle: "italic",
		fontFamily: theme.typography.body1.fontFamily,
	},
	paper: {
		width: "90%",
		maxWidth: theme.breakpoints.values.sm,
		padding: theme.spacing(4),
		position: "absolute",
		top: "100%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		zIndex: 999,
	},
}))

export default useLandingStyles
