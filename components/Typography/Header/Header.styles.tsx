import { makeStyles } from "@material-ui/core/styles"

const useHeaderStyles = makeStyles((theme) => ({
	header: {
		fontWeight: 600,
		lineHeight: 1,
		fontSize: theme.typography.pxToRem(theme.typography.fontSize * 3),
		marginBottom: theme.spacing(2.5),
		borderLeft: `${theme.spacing(1)}px solid transparent`,
		marginLeft: theme.spacing(-1),
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
		transition: theme.transitions.create(["border-color", "padding", "margin"]),
	},
}))

export default useHeaderStyles
