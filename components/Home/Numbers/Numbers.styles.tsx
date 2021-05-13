import { makeStyles } from "@material-ui/core/styles"

const useNumbersStyles = makeStyles((theme) => ({
	root: {
		textAlign: "center",
	},
	gridItem: {
		padding: theme.spacing(1.5),
		textAlign: "center",
		[theme.breakpoints.down("sm")]: {
			"&:hover": {
				"& $countup, & $title": {
					color: theme.palette.secondary.main,
				},
			},
			"&:first-child, &:last-child": {
				"&:hover": {
					"& $countup, & $title": {
						color: theme.palette.primary.main,
					},
				},
			},
		},
		[theme.breakpoints.up("sm")]: {
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
	},
	countup: {
		fontSize: theme.typography.fontSize * 2.5,
		fontWeight: 300,
		transition: theme.transitions.create(["color"]),
		[theme.breakpoints.up("md")]: {
			fontSize: theme.typography.fontSize * 3.5,
		},
	},
	title: {
		fontSize: theme.typography.fontSize - 2,
		fontWeight: 600,
		textTransform: "uppercase",
		transition: theme.transitions.create(["color"]),
		[theme.breakpoints.up("md")]: {
			fontSize: theme.typography.fontSize,
		},
	},
	donationButton: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(1),
	},
}))

export default useNumbersStyles
