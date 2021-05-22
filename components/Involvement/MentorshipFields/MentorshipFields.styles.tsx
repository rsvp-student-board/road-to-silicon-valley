import { makeStyles } from "@material-ui/core/styles"

const useMentorshipFieldsStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(1),
		backgroundColor: "white",
	},
	field: {
		paddingLeft: theme.spacing(2),
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
		textTransform: "uppercase",
		// fontStyle: "italic",
		fontWeight: 500,
		letterSpacing: 1,
		borderLeft: `4px solid ${theme.palette.primary.main}`,
	},
}))

export default useMentorshipFieldsStyles
