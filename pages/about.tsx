import { Mission, OfferList } from "@/components/About"
import { HeroLayout } from "@/components/Layout"
import { Content } from "@/components/Typography"
import { WHAT_RSVP_OFFERS } from "@/content"
import { Grid, Typography } from "@material-ui/core"
import { getBase64 } from "@plaiceholder/base64"
import { getImage } from "@plaiceholder/next"
import { GetStaticProps } from "next"
import { BlurredImgProps } from "./_app"

export const getStaticProps: GetStaticProps = async () => {
	const imageIds = ["hero.jpeg"]
	const props: BlurredImgProps = {}

	for (const imageId of imageIds) {
		const imgSrc = `/images/about/${imageId}`
		const img = await getImage(imgSrc)
		const imgBase64 = await getBase64(img)
		props[imageId] = { imgBase64, imgSrc }
	}

	return { props }
}

const AboutPage: React.FC<BlurredImgProps> = (imgs) => {
	console.log(imgs)
	return (
		<HeroLayout
			seoTitle="About"
			heroTitle="About RSVP"
			imgBase64={imgs["hero.jpeg"].imgBase64}
			imgSrc={imgs["hero.jpeg"].imgSrc}
			imgPosition="center 65%"
			content={{
				description:
					"The Road to Silicon V/Alley Program (RSVP) paves the way for students to become leaders in innovation (intrapreneurship) and entrepreneurship in a digital age. This organization aims to capitalize on the potential of Rutgers students and maximize innovation and technological skill on campus.",
			}}
		>
			<Mission />
			<Grid item xs={12}>
				<Content header="Overview">
					<Typography variant="body1">
						A considerable number of entrepreneurial and technology-based firms
						look to Rutgers University for their talent recruitment, but RSVP
						recognizes that the presence of Rutgers students in these industries
						can be even more substantial. This organization aims to capitalize
						on the potential of Rutgers students and maximize innovation and
						technological skill on campus. The slash between the V and the A in
						"Road to Silicon V/Alley" signifies the widespread nature of the
						entrepreneurial hubs in America, ranging from the west coast
						(Silicon Valley) to the east coast (Silicon Alley) — RSVP wants to
						ensure that Rutgers students have the ability to make an impact
						anywhere in this spectrum.
					</Typography>
					<Typography variant="body1">
						Outside of the program’s curriculum, students, faculty, corporate
						partners, and alumni connect and collaborate to create a think-tank
						of inventive and modernized solutions for tomorrow’s society.
						Corporate partners leverage this program to find a talent pool of
						Rutgers intrapreneurs, innovators, and creatives who have developed
						strong technical skills, business acumen, and critical soft skills.
						Additionally, their contributions to the design of the curriculum
						help shape future business innovators.
					</Typography>
				</Content>
			</Grid>
			<Grid item xs={12}>
				<Content header="What RSVP Offers">
					<Grid container spacing={3}>
						{WHAT_RSVP_OFFERS.map((offer) => (
							<Grid item xs={12} sm={6} key={`offer-list-${offer.title}`}>
								<OfferList offer={offer} />
							</Grid>
						))}
					</Grid>
				</Content>
			</Grid>

			{/* <Grid item xs={12}>
				<Content header="Experiential Learning">
					<Typography variant="body1">
						RSVP follows a experiential and multidisciplinary model that focuses
						in the areas listed below. Our cohort members not only engage in a
						multifaceted curriculum plan that provides them with many of the
						core skills needed to succeed as innovators, but also are given the
						ability to draw from a network of experts in these subjects.
					</Typography>
					<div>
						<Disciplines />
					</div>
				</Content>
			</Grid> */}
			{/* <Grid item xs={12}>
				<Content header="RSVP's Mission">
					<Typography variant="body1">
						The Road to Silicon V/Alley Program is best described by its
						mission:
					</Typography>
				</Content>
			</Grid>
			<Grid item xs={12}>
				<Mission />
			</Grid>
			<Grid item xs={12}>
				<Header>Involvement Opportunities</Header>
				<Content>
					<Typography variant="body1">
						If you are a student interested in joining RSVP as a cohort member,
						please refer to our{" "}
						<Link href="/recruitment" passHref>
							<Hyperlink>recruitment page</Hyperlink>
						</Link>
						.
					</Typography>
					<Typography variant="body1">
						Corporate partners, RU Alumni, technologists, entrepreneurs, and
						investors can get involved through any of the following.
					</Typography>
					<InvolvementOpportunities />
				</Content>
			</Grid> */}
		</HeroLayout>
	)
}

export default AboutPage
