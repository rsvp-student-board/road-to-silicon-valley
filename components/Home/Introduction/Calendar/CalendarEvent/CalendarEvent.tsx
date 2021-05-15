import { Hyperlink } from "@/components/Typography"
import {
	Box,
	ButtonBase,
	Dialog,
	DialogContent,
	DialogTitle,
	Grid,
	IconButton,
	Typography,
} from "@material-ui/core"
import type { calendar_v3 } from "googleapis"
import { useState } from "react"
import { BsFillClockFill } from "react-icons/bs"
import { MdClose, MdInfo } from "react-icons/md"
import { RiMapPinFill } from "react-icons/ri"
import useCalendarEventStyles from "./CalendarEvent.styles"

interface CalendarEventProps {
	event: calendar_v3.Schema$Event
}

const URL_REGEX = new RegExp(
	/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i
)

const CalendarEvent: React.FC<CalendarEventProps> = ({ event }) => {
	const [open, setOpen] = useState<boolean>(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const classes = useCalendarEventStyles()

	return (
		<>
			<ButtonBase onClick={handleClickOpen} className={classes.buttonBase}>
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
			<Dialog
				onClose={handleClose}
				open={open}
				maxWidth="sm"
				fullWidth
				aria-labelledby={`${event.summary}-${event.start?.dateTime}-title`}
			>
				<DialogTitle
					disableTypography
					id={`${event.summary}-${event.start?.dateTime}-title`}
				>
					<Typography variant="h5" className={classes.title}>
						{event.summary}
					</Typography>
					<IconButton
						aria-label="close"
						className={classes.closeButton}
						onClick={handleClose}
					>
						<MdClose />
					</IconButton>
				</DialogTitle>
				<DialogContent className={classes.content}>
					<Grid container spacing={1}>
						{event.start?.dateTime && (
							<Grid item xs={12}>
								<Grid container spacing={2}>
									<Grid item xs={1}>
										<Typography className={classes.infoIcon}>
											<BsFillClockFill />
										</Typography>
									</Grid>
									<Grid item xs={11}>
										<Typography variant="body1">
											{new Intl.DateTimeFormat("en-US", {
												hour12: true,
												hour: "numeric",
												minute: "numeric",
												month: "numeric",
												day: "numeric",
												year: "numeric",
											}).format(new Date(event.start.dateTime))}
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						)}
						{event.location && (
							<Grid item xs={12}>
								<Grid container spacing={2}>
									<Grid item xs={1}>
										<Typography className={classes.infoIcon}>
											<RiMapPinFill />
										</Typography>
									</Grid>
									<Grid item xs={11}>
										<Typography variant="body1">
											{URL_REGEX.test(event.location) ? (
												<Hyperlink
													href={event.location}
													target="_blank"
													rel="noopener"
												>
													Virtual
												</Hyperlink>
											) : (
												<>{event.location}</>
											)}
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						)}
						{event.description && (
							<Grid item xs={12}>
								<Grid container spacing={2}>
									<Grid item xs={1}>
										<Typography className={classes.infoIcon}>
											<MdInfo />
										</Typography>
									</Grid>
									<Grid item xs={11}>
										<Typography variant="body1">{event.description}</Typography>
									</Grid>
								</Grid>
							</Grid>
						)}
					</Grid>
				</DialogContent>
			</Dialog>
		</>
	)
}

export default CalendarEvent
