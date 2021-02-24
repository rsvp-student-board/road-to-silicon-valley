import { makeStyles } from "@material-ui/core/styles"

const useFooterStyles = makeStyles((theme) => ({
	link: {
		padding: theme.spacing(0.5),
		margin: `${theme.spacing(0.25)}px ${theme.spacing(1)}px`,
		fontSize: theme.typography.fontSize * 1.75,
		color: theme.palette.common.white,
		transition: theme.transitions.create(["color"]),
		"&:hover, &:focus": {
			color: theme.palette.primary.main,
		},
	},
	copyright: {
		fontSize: theme.typography.fontSize * 0.75,
	},
}))

export default useFooterStyles
