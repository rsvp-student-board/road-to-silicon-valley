import { makeStyles } from "@material-ui/core/styles"

const useNavMenuStyles = makeStyles((theme) => ({
	root: {
		flexDirection: "column",
		width: "100%",
		[theme.breakpoints.up("md")]: {
			flexDirection: "row",
			width: "auto",
		},
	},
}))

export default useNavMenuStyles
