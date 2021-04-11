import { InvolvementOpportunities } from "@/components/About"
import { HeroLayout } from "@/components/Layout"
import { Content, Header, Hyperlink } from "@/components/Typography"
import { WHAT_IS_RSVP } from "@/content"
import { Grid, Typography } from "@material-ui/core"
import { getBase64 } from "@plaiceholder/base64"
import { getImage } from "@plaiceholder/next"
import { GetStaticProps } from "next"
import Link from "next/link"
import { HeroPageProps } from "./_app"

export const getStaticProps: GetStaticProps = async () => {
	const imgSrc = "/images/heros/about.jpeg"
	const img = await getImage(imgSrc)
	const imgBase64 = await getBase64(img)

	return {
		props: {
			imgBase64,
			imgSrc,
		},
	}
}

const AboutPage: React.FC<HeroPageProps> = ({ imgBase64, imgSrc }) => {
	return (
		<HeroLayout
			title="About"
			imgBase64={imgBase64}
			imgSrc={imgSrc}
			imgPosition="center 65%"
		>
			<Grid item xs={12}>
				<Header>What is RSVP?</Header>
				<Content>
					{WHAT_IS_RSVP.map((paragraph, index) => (
						<Typography variant="body1" key={`what-is-rsvp-${index}`}>
							{paragraph}
						</Typography>
					))}
					{/* <Disciplines /> */}
				</Content>
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
			</Grid>
		</HeroLayout>
	)
}

export default AboutPage
