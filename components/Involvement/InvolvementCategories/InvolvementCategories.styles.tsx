import { makeStyles } from "@material-ui/core/styles"

const useInvolvementCategoriesStyles = makeStyles((theme) => ({
	gridItem: {
		"&:hover": {
			"& $icon svg": {
				transform: "scale(1.1)",
			},
		},
	},
	icon: {
		width: 100,
		height: 100,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontSize: theme.typography.pxToRem(theme.typography.fontSize * 3.75),
		borderRadius: "50%",
		border: `4px solid ${theme.palette.primary.main}`,
		color: theme.palette.primary.main,
		"& svg": {
			transition: theme.transitions.create("transform"),
		},
	},
	title: {
		textAlign: "center",
		fontFamily: theme.typography.body1.fontFamily,
		fontWeight: 500,
		fontSize: theme.typography.pxToRem(theme.typography.fontSize * 1.25),
		textTransform: "uppercase",
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	description: {
		fontSize: theme.typography.pxToRem(theme.typography.fontSize),
		fontWeight: 300,
		textAlign: "center",
	},
}))

export default useInvolvementCategoriesStyles
