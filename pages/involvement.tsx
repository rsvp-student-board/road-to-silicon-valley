import {
	Donate,
	InvolvementCategories,
	InvolvementOpportunities,
	MentorshipFields,
} from "@/components/Involvement"
import { HeroLayout } from "@/components/Layout"
import { Content, Hyperlink } from "@/components/Typography"
import { Grid, Typography } from "@material-ui/core"
import { getBase64 } from "@plaiceholder/base64"
import { getImage } from "@plaiceholder/next"
import { EMAIL } from "constants/contact"
import { GetStaticProps } from "next"
import { BlurredImgProps } from "./_app"

export const getStaticProps: GetStaticProps = async () => {
	const imageIds = ["hero.jpeg"]
	const props: BlurredImgProps = {}

	for (const imageId of imageIds) {
		const imgSrc = `/images/involvement/${imageId}`
		const imgFile = await getImage(imgSrc)
		const imgBase64 = await getBase64(imgFile)
		props[imageId] = { imgBase64, imgSrc }
	}

	return { props }
}

const InvolvementPage: React.FC<BlurredImgProps> = (imgs) => {
	return (
		<HeroLayout
			title="Partner Involvement Opportunities"
			imgBase64={imgs["hero.jpeg"].imgBase64}
			imgSrc={imgs["hero.jpeg"].imgSrc}
			content={{
				subtitle: "Get Involved",
				description:
					"RSVP's alumni and corporate partners provide irreplaceable value to the organization. There are a multitude of channels available for them to contribute to the program and our students.",
			}}
		>
			<Donate />
			<Grid item xs={12}>
				<InvolvementCategories />
			</Grid>
			<Grid item xs={12}>
				<Content header="Mentorship">
					<Typography variant="body1">
						RSVP is always looking for new mentors for cohort members. The
						mentorship program is one of the best ways that corporate and alumni
						partners can engage with RSVP students and provide them with
						tangible means for success. Mentors lend their experience to
						students and help them navigate course selections, career
						preparation, and internship opportunities. Our students are
						interested in a wide array of fields and industries, including but
						not limited to:
					</Typography>
					<div>
						<MentorshipFields />
					</div>
					<Typography variant="body1">
						The mentorship program is designed such that the students are
						primarily responsible for sustaining the mentor-mentee relationship
						in an effort to facilitate mentors' contribution efforts. If you
						would like to learn more or apply to be a mentor, please reach out
						via email (<Hyperlink href={`mailto:${EMAIL}`}>{EMAIL}</Hyperlink>).
					</Typography>
				</Content>
			</Grid>
			<Grid item xs={12}>
				<Content header="Other Involvement Opportunities">
					<div>
						<InvolvementOpportunities />
					</div>
					<Typography variant="body1">
						If you would like to learn more about how to get involved with the
						Road to Silicon V/Alley Program, feel free to send us an email at (
						<Hyperlink href={`mailto:${EMAIL}`}>{EMAIL}</Hyperlink>).
					</Typography>
				</Content>
			</Grid>
		</HeroLayout>
	)
}

export default InvolvementPage
