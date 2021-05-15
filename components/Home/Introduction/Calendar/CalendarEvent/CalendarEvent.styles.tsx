import { makeStyles } from "@material-ui/core/styles"

const useCalendarEventStyles = makeStyles((theme) => ({
	buttonBase: {
		width: "100%",
		justifyContent: "flex-start",
	},
	previewContainer: {
		padding: `${theme.spacing(0.5)}px ${theme.spacing(0.75)}px`,
		borderRadius: theme.shape.borderRadius,
	},
	preview: {
		lineHeight: 1,
		fontSize: theme.typography.fontSize,
	},
	title: {
		fontSize: theme.typography.fontSize * 1.5,
		fontWeight: 500,
		borderLeft: `5px solid ${theme.palette.secondary.main}`,
		paddingLeft: theme.spacing(2),
		// marginBottom: theme.spacing(2),
	},
	closeButton: {
		position: "absolute",
		right: theme.spacing(1),
		top: theme.spacing(0.75),
		color: theme.palette.grey[500],
	},
	content: {
		[theme.breakpoints.up("sm")]: {
			paddingLeft: theme.spacing(6),
			paddingRight: theme.spacing(6),
		},
		paddingBottom: theme.spacing(2),
		maxWidth: "100%",
	},
	infoIcon: {
		paddingTop: 2,
	},
}))

export default useCalendarEventStyles
