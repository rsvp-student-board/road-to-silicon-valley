import { Box, ButtonBase, Grid, Tooltip, Typography } from "@material-ui/core"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import type { calendar_v3 } from "googleapis"
import { useState } from "react"
import { RiMapPinFill } from "react-icons/ri"
import useCalendarEventStyles from "./CalendarEvent.styles"

interface CalendarEventProps {
	event: calendar_v3.Schema$Event
}

const CalendarEvent: React.FC<CalendarEventProps> = ({ event }) => {
	const [open, setOpen] = useState<boolean>(false)

	const classes = useCalendarEventStyles()

	const handleTooltipClose = () => {
		setOpen(false)
	}

	const handleTooltipOpen = () => {
		setOpen(true)
	}

	return (
		<ClickAwayListener onClickAway={handleTooltipClose}>
			<div>
				<Tooltip
					PopperProps={{
						disablePortal: true,
					}}
					onClose={handleTooltipClose}
					open={open}
					disableFocusListener
					disableHoverListener
					disableTouchListener
					title={
						<Box width="100%" className={classes.container}>
							<Typography variant="h5" className={classes.title}>
								Mollit excepteur anim consectetur ut magna ad laboris sunt
								consectetur.
							</Typography>
							<Grid container spacing={2}>
								{event.location && (
									<Grid item xs={12} container spacing={1} wrap="wrap">
										<Grid item xs={1} zeroMinWidth className={classes.infoIcon}>
											<RiMapPinFill />
										</Grid>
										<Grid item xs={11}>
											<Typography className={classes.info}>
												Mollit excepteur anim consectetur ut magna ad laboris
												sunt consectetur.
											</Typography>
										</Grid>
									</Grid>
								)}
							</Grid>
						</Box>
					}
					interactive
					classes={{ tooltip: classes.tooltip }}
				>
					<ButtonBase
						onClick={handleTooltipOpen}
						className={classes.buttonBase}
					>
						<Box
							bgcolor="primary.main"
							width="100%"
							textAlign="left"
							className={classes.previewContainer}
						>
							<Typography variant="body1" className={classes.preview}>
								{event.summary}
							</Typography>
						</Box>
					</ButtonBase>
				</Tooltip>
			</div>
		</ClickAwayListener>
	)
}

export default CalendarEvent
