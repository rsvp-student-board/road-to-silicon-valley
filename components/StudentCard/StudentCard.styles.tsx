import { fade, makeStyles } from "@material-ui/core/styles"

interface StudentCardStylesProps {
	alternateColor?: boolean
}

const useStudentCardStyles = makeStyles((theme) => ({
	root: {
		overflow: "hidden",
		"&:hover": {
			"& $image": {
				filter: "blur(1px)",
				transform: "scale(1.2)",
			},
			"& $linksContainer": {
				opacity: 1,
				visibility: "visible",
			},
		},
	},
	image: {
		transform: "scale(1.1)",
		transition: theme.transitions.create(["filter", "transform"]),
	},
	name: {
		textAlign: "center",
		marginTop: theme.spacing(1),
		fontWeight: 500,
		fontSize: theme.typography.pxToRem(theme.typography.fontSize * 1.25),
	},
	linksContainer: {
		opacity: 0,
		background: (props: StudentCardStylesProps) =>
			props.alternateColor
				? fade(theme.palette.secondary.main, 0.8)
				: fade(theme.palette.primary.main, 0.8),
		visibility: "hidden",
		marginBottom: theme.spacing(-2),
		transition: theme.transitions.create(["opacity", "visible"]),
	},
	link: {
		marginBottom: theme.spacing(2),
		color: (props: StudentCardStylesProps) =>
			props.alternateColor
				? theme.palette.common.black
				: theme.palette.common.white,
		fontSize: theme.typography.pxToRem(theme.typography.fontSize * 3),
	},
}))

export default useStudentCardStyles
