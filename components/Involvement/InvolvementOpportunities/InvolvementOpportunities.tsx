import { INVOLVEMENT_OPPORTUNITIES } from "@/content"
import { Container } from "@material-ui/core"
import Accordion from "@material-ui/core/Accordion"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import Typography from "@material-ui/core/Typography"
import { useState } from "react"
import { MdExpandMore } from "react-icons/md"
import useInvolvementOpportunitiesStyles from "./InvolvementOpportunities.styles"

const InvolvementOpportunities: React.FC = () => {
	const [expanded, setExpanded] = useState<number | false>(0)

	const classes = useInvolvementOpportunitiesStyles()

	const handleChange =
		(panel: number) => (_event: React.ChangeEvent<{}>, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false)
		}

	return (
		<Container maxWidth="sm" className={classes.root}>
			{INVOLVEMENT_OPPORTUNITIES.map((opportunity, index) => (
				<Accordion
					expanded={expanded === index}
					onChange={handleChange(index)}
					key={`involvement-opportunity-${index}`}
					className={classes.accordion}
				>
					<AccordionSummary
						expandIcon={<MdExpandMore />}
						className={classes.summary}
						aria-controls={`panel${index + 1}bh-content`}
						id={`panel${index + 1}bh-header`}
					>
						<Typography variant="body1" className={classes.title}>
							{opportunity.title}
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography variant="body1">{opportunity.description}</Typography>
					</AccordionDetails>
				</Accordion>
			))}
		</Container>
	)
}

export default InvolvementOpportunities
