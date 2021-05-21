import { makeStyles } from "@material-ui/core/styles"

const useMembershipBenefitsStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		marginRight: 0,
		marginLeft: -theme.spacing(1.5),
		marginBottom: -theme.spacing(1.5),
		width: "auto",
	},
	col: {
		paddingLeft: theme.spacing(1.5),
		backgroundClip: "padding-box",
	},
	gridItem: {
		padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
		position: "relative",
		marginBottom: theme.spacing(1.5),
		overflow: "hidden",
		"&:hover": {
			"& $icon": {
				color: theme.palette.secondary.main,
			},
		},
	},
	title: {
		textTransform: "uppercase",
		fontWeight: 600,
		fontStyle: "italic",
		padding: `0 ${theme.spacing(1)}px`,
		margin: `${theme.spacing(2.25)}px 0`,
		position: "relative",
		zIndex: 99,
	},
	description: {
		padding: `${theme.spacing(1)}px ${theme.spacing(1)}px 
					${theme.spacing(2)}px`,
	},
	icon: {
		position: "absolute",
		zIndex: 98,
		top: theme.spacing(1.5),
		right: theme.spacing(2.5),
		color: theme.palette.primary.main,
		fontSize: theme.typography.pxToRem(theme.typography.fontSize * 3),
		opacity: 0.4,
		transition: theme.transitions.create("color"),
	},
}))

export default useMembershipBenefitsStyles
