import { fade, makeStyles } from "@material-ui/core/styles"

const useHeroStyles = makeStyles((theme) => ({
	root: {
		height: "30vh",
		width: "100%",
		background: theme.palette.primary.main,
		"& .react-parallax-background-children": {
			width: "100%",
			height: "100%",
		},
		[theme.breakpoints.up("md")]: {
			height: "45vh",
		},
	},
	background: {
		height: "100%",
		width: "100%",
		position: "relative",
		overflow: "hidden",
	},
	content: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
		textShadow: `2px 2px 6px ${fade(theme.palette.common.black, 0.4)}`,
		backgroundColor: fade(theme.palette.common.black, 0.6),
		padding: `0 ${theme.spacing(2.5)}px`,
		[theme.breakpoints.up("lg")]: {
			padding: `0 ${theme.spacing(2)}px`,
		},
	},
	title: {
		color: theme.palette.common.white,
		fontWeight: 450,
		textTransform: "uppercase",
		letterSpacing: 1,
		fontSize: theme.typography.fontSize * 2.75,
		[theme.breakpoints.up("sm")]: {
			fontSize: theme.typography.fontSize * 4,
		},
		[theme.breakpoints.up("md")]: {
			fontSize: theme.typography.fontSize * 5,
		},
		[theme.breakpoints.up("lg")]: {
			fontSize: theme.typography.fontSize * 6,
		},
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
}))

export default useHeroStyles
