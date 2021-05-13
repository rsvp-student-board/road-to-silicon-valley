import { makeStyles } from "@material-ui/core/styles"

const useNavMenuStyles = makeStyles((theme) => ({
	root: {
		flexDirection: "column",
		width: "100%",
		alignItems: "flex-start",
		maxWidth: theme.breakpoints.values.sm,
		margin: "0 auto",
		[theme.breakpoints.up("md")]: {
			flexDirection: "row",
			width: "auto",
			alignItems: "center",
			maxWidth: "none",
			margin: 0,
		},
	},
}))

export default useNavMenuStyles
