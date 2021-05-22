import { makeStyles } from "@material-ui/core/styles"

const useInvolvementOpportunitiesStyles = makeStyles((theme) => ({
	root: {
		marginBottom: theme.spacing(1.5),
	},
	accordion: {
		padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
	},
	summary: {
		transition: theme.transitions.create(["color"]),
		"&:hover": {
			color: theme.palette.primary.main,
		},
	},
	title: {
		textTransform: "uppercase",
		fontWeight: 600,
		fontStyle: "italic",
	},
}))

export default useInvolvementOpportunitiesStyles
