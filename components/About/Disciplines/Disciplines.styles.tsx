import { makeStyles } from "@material-ui/core/styles"

const useDisciplinesStyles = makeStyles((theme) => ({
	icon: {
		color: theme.palette.primary.main,
		fontSize: theme.typography.fontSize * 2.5,
		textAlign: "center",
	},
	title: {
		textTransform: "uppercase",
		fontWeight: 600,
		fontStyle: "italic",
	},
}))

export default useDisciplinesStyles
