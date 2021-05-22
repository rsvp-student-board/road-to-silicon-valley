import { Container, Grid, Typography } from "@material-ui/core"
import { MENTORSHIP_FIELDS } from "content/involvement"
import useMentorshipFieldsStyles from "./MentorshipFields.styles"

const MentorshipFields: React.FC = () => {
	const classes = useMentorshipFieldsStyles()

	return (
		<Container maxWidth="sm">
			<Grid container spacing={1}>
				{MENTORSHIP_FIELDS.map((field) => (
					<Grid item xs={12} sm={6} key={`mentorship-field-${field}`}>
						<Typography variant="body1" className={classes.field}>
							{field}
						</Typography>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default MentorshipFields
