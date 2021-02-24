import { makeStyles } from "@material-ui/core/styles"

const useIntroductionStyles = makeStyles((theme) => ({
	tagline: {
		fontWeight: 300,
		// fontStyle: "italic",
		textAlign: "center",
		color: theme.palette.text.primary,
	},
	button: {
		color: theme.palette.common.white,
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
		fontSize: theme.typography.fontSize * 1.25,
		fontWeight: 300,
		letterSpacing: 1,
	},
}))

export default useIntroductionStyles
