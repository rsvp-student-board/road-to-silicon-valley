import { fade, makeStyles } from "@material-ui/core/styles"

const useCalendarEventStyles = makeStyles((theme) => ({
	tooltip: {
		background: fade(theme.palette.background.paper, 0.95),
		padding: theme.spacing(2),
		color: theme.palette.text.primary,
		marginTop: theme.spacing(0.5),
		position: "relative",
		boxShadow: theme.shadows[1],
		cursor: "default",
	},
	container: {
		wordWrap: "break-word",
	},
	title: {
		fontSize: theme.typography.fontSize * 1.25,
		fontWeight: 500,
		maxWidth: "100%",
		position: "relative",
		zIndex: 16000,
		borderLeft: `5px solid ${theme.palette.secondary.main}`,
		paddingLeft: theme.spacing(2),
		marginBottom: theme.spacing(2),
	},
	infoIcon: {},
	infoContainer: {},
	info: {
		maxWidth: 245,

		// display: "inline",
	},
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
}))

export default useCalendarEventStyles
