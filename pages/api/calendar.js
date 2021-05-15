const { google } = require("googleapis")

export default async (req, res) => {
	const calendar = google.calendar({
		version: "v3",
		auth: process.env.GOOGLE_CALENDAR_API_KEY,
	})

	calendar.events.list(
		{
			calendarId: process.env.GOOGLE_CALENDAR_ID,
			maxResults: 2500,
			singleEvents: true,
			orderBy: "startTime",
		},
		(err, res2) => {
			if (err) {
				return console.log("The API returned an error: " + err)
			}
			const events = res2.data.items
			res.json(events)
		}
	)

	return res.status(200)
}
