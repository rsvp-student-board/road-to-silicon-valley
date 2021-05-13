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
			transform: "translateY(-400px)",
			marginBottom: -400,
		},
	},
	taglineContainer: {
		"&&": {
			[theme.breakpoints.up("sm")]: {
				paddingRight: theme.spacing(4),
			},
		},
	},
	tagline: {
		fontWeight: 500,
		fontSize: theme.typography.fontSize * 1.5,
		color: theme.palette.text.primary,
		textAlign: "center",
		[theme.breakpoints.up("sm")]: {
			fontSize: theme.typography.fontSize * 1.8,
			textAlign: "right",
		},

		[theme.breakpoints.up("md")]: {
			fontSize: theme.typography.fontSize * 2.25,
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
				paddingLeft: theme.spacing(4),
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
	disciplineGridItem: {
		textAlign: "center",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		textTransform: "uppercase",
		transition: theme.transitions.create("color"),
		"&:hover": {
			color: theme.palette.primary.main,
			"& $disciplineIcon": {
				borderColor: theme.palette.primary.main,
			},
		},
	},
	disciplineIcon: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: 60,
		width: 60,
		borderRadius: "50%",
		fontSize: 30,
		border: `2px solid ${theme.palette.common.black}`,
		transition: theme.transitions.create("border-color"),
	},
	disciplineTitle: {
		fontSize: theme.typography.fontSize - 2,
		fontWeight: 500,
		marginTop: theme.spacing(0.75),
		[theme.breakpoints.up("sm")]: {
			fontSize: theme.typography.fontSize,
			letterSpacing: 1,
		},
	},
}))

export default useIntroductionStyles
