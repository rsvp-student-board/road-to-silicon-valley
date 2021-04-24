import { makeStyles } from "@material-ui/core/styles"

const useIntroductionStyles = makeStyles((theme) => ({
	tagline: {
		fontWeight: 400,
		textAlign: "center",
		color: theme.palette.text.primary,
	},
}))

export default useIntroductionStyles
