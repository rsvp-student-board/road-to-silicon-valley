import { makeStyles } from "@material-ui/core/styles"

const useOfferListStyles = makeStyles((theme) => ({
	title: {
		display: "inline-block",
		paddingRight: theme.spacing(3),
		paddingBottom: theme.spacing(0.75),
		marginBottom: theme.spacing(2.5),
		fontFamily: theme.typography.body1.fontFamily,
		textTransform: "uppercase",
		letterSpacing: 2,
		fontWeight: 300,
		borderBottom: `1px solid ${theme.palette.common.black}`,
	},
	offerList: {
		position: "relative",
		maxWidth: "none",
		width: "100%",
		padding: `${theme.spacing(3)}px 0`,
		"&:before": {
			content: '""',
			position: "absolute",
			top: 0,
			left: 18,
			height: "100%",
			width: 2,
			backgroundColor: theme.palette.primary.main,
		},
	},
	offerItem: {
		position: "relative",
		background: "transparent",
		marginTop: theme.spacing(3),

		"&:first-child": {
			marginTop: 0,
		},
		"&:hover": {
			"& $icon": {
				backgroundColor: theme.palette.primary.main,
				color: theme.palette.background.paper,
			},
		},
		[theme.breakpoints.up("sm")]: {
			marginTop: theme.spacing(4),
		},
	},
	icon: {
		position: "absolute",
		top: 0,
		left: -1,
		width: 40,
		height: 40,
		border: `2px solid ${theme.palette.primary.main}`,
		borderRadius: "50%",
		backgroundColor: theme.palette.background.paper,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		transition: theme.transitions.create(["background-color", "color"]),
	},
	offerNumber: {
		fontSize: theme.typography.pxToRem(theme.typography.fontSize * 1.25),
		fontWeight: 400,
		lineHeight: 1,
	},
	content: {
		position: "relative",
		background: "transparent",
		borderRadius: 0,
		boxShadow: "none",
		padding: 0,
		marginLeft: 60,
	},
	offerTitle: {
		fontWeight: 400,
		fontSize: theme.typography.pxToRem(theme.typography.fontSize * 1.4),
		fontFamily: theme.typography.body1.fontFamily,
		paddingTop: 7,
		lineHeight: 1.4,
	},
	offerNote: {
		fontWeight: 300,
		fontSize: theme.typography.pxToRem(theme.typography.fontSize),
		fontStyle: "italic",
		lineHeight: 1.4,
	},
}))

export default useOfferListStyles
