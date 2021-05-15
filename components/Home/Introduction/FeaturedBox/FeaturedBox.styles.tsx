import { fade, makeStyles } from "@material-ui/core/styles"

interface FeaturedBoxStylesProps {
	contentContainerBackground: "primary" | "secondary"
}

const useFeaturedBoxStyles = makeStyles((theme) => ({
	root: {
		height: "100%",
		"&:hover": {
			"& $image": {
				filter: "blur(4px)",
			},
			"& $overlay": {
				backgroundColor: fade(theme.palette.common.black, 0.3),
			},
			"& $contentContainer": {
				transform: "translateY(0)",
				backgroundColor: (props: FeaturedBoxStylesProps) =>
					fade(theme.palette[props.contentContainerBackground].main, 0.85),
				color: theme.palette.common.black,
			},
			"& $content": {
				opacity: 1,
			},
		},
		[theme.breakpoints.up("md")]: {
			height: 375,
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
	image: {
		transition: theme.transitions.create("filter"),
	},
	overlay: {
		backgroundColor: fade(theme.palette.common.black, 0.15),
		transition: theme.transitions.create("background-color"),
	},
	contentContainer: {
		backgroundColor: () => fade(theme.palette.common.black, 0.65),
		height: "100%",
		width: "75%",
		transform: "translateY(40%)",
		transition: theme.transitions.create([
			"transform",
			"background-color",
			"color",
		]),
		color: theme.palette.common.white,
		padding: `${theme.spacing(6)}px ${theme.spacing(3)}px`,
	},
	title: {
		fontSize: theme.typography.fontSize * 1.5,
		fontFamily: theme.typography.body1.fontFamily,
		textTransform: "uppercase",
		fontWeight: 500,
	},
	content: {
		color: theme.palette.common.black,
		opacity: 0,
		transition: theme.transitions.create("opacity"),
	},
	description: {
		fontSize: theme.typography.fontSize,
	},
}))

export default useFeaturedBoxStyles
