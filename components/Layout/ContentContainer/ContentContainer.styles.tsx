import { makeStyles } from "@material-ui/core/styles"

const useContentContainerStyles = makeStyles((theme) => ({
	root: {
		padding: 0,
		backgroundColor: theme.palette.background.paper,
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
		[theme.breakpoints.up("md")]: {
			paddingTop: theme.spacing(10),
			paddingBottom: theme.spacing(10),
		},
	},
}))

export default useContentContainerStyles
