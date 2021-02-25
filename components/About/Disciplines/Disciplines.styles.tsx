import { makeStyles } from "@material-ui/core/styles"

const useDisciplinesStyles = makeStyles((theme) => ({
	container: {
		borderRadius: theme.shape.borderRadius,
		padding: theme.spacing(2),
		border: `1px solid ${theme.palette.text.primary}`,
		color: theme.palette.text.primary,
		opacity: 0.7,
		position: "relative",
		transition: theme.transitions.create(["border-color", "opacity"]),
		"& svg": {
			position: "absolute",
			height: "90%",
			width: "auto",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			opacity: 0.15,
			transition: theme.transitions.create(["color"]),
		},
		"&:hover": {
			opacity: 1,
			borderColor: theme.palette.primary.main,
			"& svg": {
				color: theme.palette.primary.main,
			},
		},
		// "&:nth-child(odd)": {
		// 	"&:hover": {
		// 		borderColor: theme.palette.primary.main,
		// 		"& svg": {
		// 			color: theme.palette.primary.main,
		// 		},
		// 	},
		// },
		// "&:nth-child(even)": {
		// 	"&:hover": {
		// 		borderColor: theme.palette.secondary.main,
		// 		"& svg": {
		// 			color: theme.palette.secondary.main,
		// 		},
		// 	},
		// },
	},
	title: {
		textTransform: "uppercase",
		textAlign: "center",
		fontSize: theme.typography.fontSize,
		fontWeight: 500,
	},
}))

export default useDisciplinesStyles
