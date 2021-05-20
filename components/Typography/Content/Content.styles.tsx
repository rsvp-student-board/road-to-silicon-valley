import { makeStyles } from "@material-ui/core/styles"

const useContentStyles = makeStyles((theme) => ({
	root: {
		marginBottom: theme.spacing(-2),
		"&:hover": {
			"& .header": {
				borderLeftColor: theme.palette.secondary.main,
				paddingLeft: theme.spacing(2),
				marginLeft: 0,
			},
		},
	},
	item: {
		marginBottom: theme.spacing(2),
	},
}))

export default useContentStyles
