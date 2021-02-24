import { makeStyles } from "@material-ui/core/styles"

const useNumbersStyles = makeStyles((theme) => ({
	gridItem: {
		padding: theme.spacing(1.5),
		textAlign: "center",
		"&:nth-child(odd)": {
			"&:hover": {
				"& $countup, & $title": {
					color: theme.palette.primary.main,
				},
			},
		},
		"&:nth-child(even)": {
			"&:hover": {
				"& $countup, & $title": {
					color: theme.palette.secondary.main,
				},
			},
		},
	},
	countup: {
		fontSize: theme.typography.fontSize * 2.5,
		fontWeight: 300,
		transition: theme.transitions.create(["color"]),
	},
	title: {
		fontSize: theme.typography.fontSize - 2,
		fontWeight: 600,
		textTransform: "uppercase",
		transition: theme.transitions.create(["color"]),
	},
}))

export default useNumbersStyles
