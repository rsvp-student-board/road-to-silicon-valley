import { fade, makeStyles } from "@material-ui/core/styles"

const useHeroStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		background: theme.palette.common.black,
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
		width: "100%",
		minHeight: "auto",
		height: "auto",
		display: "flex",
		alignItems: "center",
		textShadow: `2px 2px 6px ${fade(theme.palette.common.black, 0.4)}`,
		backgroundColor: fade(theme.palette.common.black, 0.6),
		paddingTop: theme.spacing(18),
		paddingBottom: theme.spacing(10),
		[theme.breakpoints.up("sm")]: {
			minHeight: 500,
		},
		[theme.breakpoints.up("md")]: {
			paddingTop: theme.spacing(15),
			minHeight: 700,
		},
	},

	title: {
		color: theme.palette.common.white,
		fontWeight: 500,
		letterSpacing: 1,
		lineHeight: 1,
		fontSize: theme.typography.pxToRem(theme.typography.fontSize * 3.5),
		[theme.breakpoints.up("md")]: {
			fontSize: theme.typography.pxToRem(theme.typography.fontSize * 5.25),
		},
	},
	subtitle: {
		fontFamily: theme.typography.body1.fontFamily,
		textTransform: "uppercase",
		fontSize: theme.typography.pxToRem(theme.typography.fontSize),
		letterSpacing: 1,
		fontWeight: 400,
	},
	description: {
		marginTop: theme.spacing(5),
		maxWidth: 600,
		fontSize: theme.typography.pxToRem(theme.typography.fontSize * 1.25),
	},
	numbersGrid: {
		marginTop: theme.spacing(6),
	},
	numberGridItem: {
		borderLeft: `1px solid ${fade(theme.palette.common.white, 0.3)}`,
		paddingLeft: theme.spacing(2),
		paddingBottom: theme.spacing(3.5),
	},
	numberCounter: {
		fontSize: theme.typography.pxToRem(theme.typography.fontSize * 2.5),
		fontWeight: 300,
		color: theme.palette.primary.main,
	},
	numberTitle: {
		marginTop: theme.spacing(-0.5),
		fontSize: theme.typography.pxToRem(theme.typography.fontSize),
		fontWeight: 500,
		textTransform: "uppercase",
	},
}))

export default useHeroStyles
