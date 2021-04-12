import { Content, Header } from "@/components/Typography"
import { MISSION, MISSION_DESCRIPTION } from "@/content"
import { Typography } from "@material-ui/core"
import useMissionStyles from "./Mission.styles"

const Mission: React.FC = () => {
	const classes = useMissionStyles()

	return (
		<>
			<Header>RSVP's Mission</Header>
			<Content>
				<Typography variant="body1" className={classes.mission}>
					{MISSION}
				</Typography>
				<Typography variant="body1">{MISSION_DESCRIPTION}</Typography>
			</Content>
		</>
	)
}

export default Mission
