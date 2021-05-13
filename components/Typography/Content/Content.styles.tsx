import { makeStyles } from "@material-ui/core/styles"

const useContentStyles = makeStyles((theme) => ({
	root: {
		marginBottom: theme.spacing(-2),
	},
	item: {
		marginBottom: theme.spacing(2),
	},
}))

export default useContentStyles
