import { makeStyles } from "@material-ui/core/styles"

const useIntroductionStyles = makeStyles((theme) => ({
	box: {
		// marginTop: theme.spacing(-30),
		[theme.breakpoints.up("md")]: {
			display: "inline-block",
		},
	},
	container: {
		[theme.breakpoints.up("md")]: {
			position: "relative",
			transform: "translateY(-370px)",
			marginBottom: -370,
		},
	},
	taglineContainer: {},
	tagline: {
		borderLeft: `8px solid ${theme.palette.primary.main}`,
		paddingLeft: theme.spacing(3),
		fontSize: theme.typography.fontSize * 1.75,
		color: theme.palette.text.primary,
		[theme.breakpoints.up("sm")]: {
			fontSize: theme.typography.fontSize * 2.5,
		},
	},
	logoContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: theme.spacing(-1),
		"&&": {
			[theme.breakpoints.up("sm")]: {
				marginBottom: 0,
				justifyContent: "flex-start",
				// paddingLeft: theme.spacing(4),
			},
		},
	},
	logoWrapper: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: theme.spacing(1),
		borderRadius: "50%",
		boxShadow: theme.shadows[2],
	},
	logo: {
		width: 60,
		height: "auto",
		opacity: 0.65,
		transition: theme.transitions.create("opacity"),
		"&:hover": {
			opacity: 1,
		},
		[theme.breakpoints.up("sm")]: {
			width: 60,
		},
	},
	boxesGridItem: {
		[theme.breakpoints.up("md")]: {
			marginTop: theme.spacing(-20),
		},
	},
}))

export default useIntroductionStyles
