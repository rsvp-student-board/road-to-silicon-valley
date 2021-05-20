import { Offer } from "@/content"
import { Typography } from "@material-ui/core"
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component"
import useOfferListStyles from "./OfferList.styles"

interface OfferListProps {
	offer: Offer
}

const OfferList: React.FC<OfferListProps> = ({ offer }) => {
	const classes = useOfferListStyles()

	return (
		<>
			<Typography variant="h6" className={classes.title}>
				{offer.title}
			</Typography>
			<VerticalTimeline
				animate={false}
				layout="1-column"
				className={classes.offerList}
			>
				{offer.items.map((item, index) => (
					<VerticalTimelineElement
						contentArrowStyle={{ display: "none" }}
						icon={
							<Typography className={classes.offerNumber}>
								{index + 1}
							</Typography>
						}
						iconClassName={classes.icon}
						textClassName={classes.content}
						className={classes.offerItem}
						key={`offer-${offer.title}-${item.title}`}
					>
						<Typography variant="h6" className={classes.offerTitle}>
							{item.title}
						</Typography>
						{item.note && (
							<Typography variant="body1" className={classes.offerNote}>
								{item.note}
							</Typography>
						)}
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
			{/* {offer.items.map((item, index) => (
				<Grid
					container
					spacing={2}
					className={classes.offerItem}
					key={`offer-${offer.title}-${item.title}`}
				>
					<Grid item xs={1}>
						<Typography className={classes.offerNumber}>{index + 1}</Typography>
					</Grid>
					<Grid item xs={11}>
						<Typography variant="body1" className={classes.offerTitle}>
							{item.title}
						</Typography>
						{item.note && (
							<Typography variant="body1" className={classes.offerNote}>
								{item.note}
							</Typography>
						)}
					</Grid>
				</Grid>
			))} */}
		</>
	)
}

export default OfferList
