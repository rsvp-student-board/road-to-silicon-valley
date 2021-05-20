import { makeStyles } from "@material-ui/core/styles"

const useMissionStyles = makeStyles((theme) => ({
	root: {
		"&&": {
			[theme.breakpoints.up("md")]: {
				padding: 0,
				position: "absolute",
				marginTop: theme.spacing(-28),
				left: "50%",
				width: "100%",
				maxWidth: theme.breakpoints.values["lg"] + 80,
				transform: "translateX(-50%)",
			},
		},
	},
	container: {
		padding: `${theme.spacing(4)}px ${theme.spacing(5)}px`,
		background: theme.palette.common.black,
		color: theme.palette.common.white,
		[theme.breakpoints.up("md")]: {
			position: "absolute",
			top: 0,
			right: 0,
			width: "auto",
			maxWidth: 700,
		},
	},
	header: {
		fontSize: theme.typography.pxToRem(theme.typography.fontSize * 3),
		marginBottom: theme.spacing(2),
	},
	mission: {
		fontSize: theme.typography.pxToRem(theme.typography.fontSize * 1.5),
		borderLeft: `5px solid ${theme.palette.primary.main}`,
		paddingLeft: theme.spacing(3),
		paddingTop: theme.spacing(1),
		paddingBottom: theme.spacing(1),
		[theme.breakpoints.up("md")]: {
			fontSize: theme.typography.pxToRem(theme.typography.fontSize * 1.25),
		},
	},
}))

export default useMissionStyles
