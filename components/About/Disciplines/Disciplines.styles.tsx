import { makeStyles } from "@material-ui/core/styles"

const useDisciplinesStyles = makeStyles((theme) => ({
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

export default useDisciplinesStyles
