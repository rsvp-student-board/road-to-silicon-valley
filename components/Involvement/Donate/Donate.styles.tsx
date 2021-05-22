import { makeStyles } from "@material-ui/core/styles"

const useDonateStyles = makeStyles((theme) => ({
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
	description: {
		fontSize: theme.typography.pxToRem(theme.typography.fontSize * 1.25),
		marginBottom: theme.spacing(3),
	},
}))

export default useDonateStyles
