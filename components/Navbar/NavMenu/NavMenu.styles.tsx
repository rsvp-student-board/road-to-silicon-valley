import { makeStyles } from "@material-ui/core/styles"

const useNavMenuStyles = makeStyles((theme) => ({
	root: {
		flexDirection: "column",
		width: "100%",
		alignItems: "flex-start",
		[theme.breakpoints.up("md")]: {
			flexDirection: "row",
			width: "auto",
			alignItems: "center",
		},
	},
}))

export default useNavMenuStyles
