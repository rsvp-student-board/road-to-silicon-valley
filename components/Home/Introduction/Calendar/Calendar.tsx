import type { calendar_v3 } from "googleapis"
import moment from "moment"
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar"
import useSwr from "swr"
import useCalendarStyles from "./Calendar.styles"
import CalendarEvent from "./CalendarEvent"
import CalendarToolbar from "./CalendarToolbar"

type Event = calendar_v3.Schema$Event

const localizer = momentLocalizer(moment)

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Calendar: React.FC = () => {
	const { data: events, error } = useSwr<Event[]>("/api/calendar", fetcher)
	console.log(events)

	const classes = useCalendarStyles()

	return (
		<>
			{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

			<BigCalendar
				localizer={localizer}
				events={!error && events ? events : []}
				titleAccessor={(event: Event) => event.summary || ""}
				startAccessor={(event: Event) =>
					new Date(event.start?.dateTime || event.start?.date || Date.now())
				}
				endAccessor={(event: Event) =>
					new Date(event.end?.dateTime || event.end?.date || Date.now())
				}
				components={{
					toolbar: CalendarToolbar,
					event: CalendarEvent,
				}}
				drilldownView={null}
				className={classes.root}
			/>
		</>
	)
}

export default Calendar
