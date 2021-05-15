import { makeStyles } from "@material-ui/core"

const useCalendarStyles = makeStyles((theme) => ({
	root: {
		"& .rbc-month-view": {
			borderTop: "none",
			borderLeft: "none",
			borderRight: "none",
			"& .rbc-month-header": {
				display: "flex",
				paddingBottom: theme.spacing(1),
				borderBottom: `1px solid ${theme.palette.text.primary}`,
				"& .rbc-header": {
					width: "calc(100% / 7)",
					textAlign: "center",
					fontWeight: "bold",
					border: "none",
					fontFamily: theme.typography.body1.fontFamily,
				},
			},
			"& .rbc-month-row": {
				overflow: "visible",
				"& .rbc-row-bg": {
					borderLeft: "1px solid #DDD",
					borderRight: "1px solid #DDD",
					"& .rbc-off-range-bg": {
						backgroundColor: "transparent",
					},
				},
				"& .rbc-row-content": {
					minHeight: 100,
					fontFamily: theme.typography.body1.fontFamily,
					zIndex: "auto",
					"& .rbc-event": {
						backgroundColor: "transparent",
						color: theme.palette.text.primary,
						padding: 0,
					},
				},
			},
		},
	},
}))

export default useCalendarStyles
