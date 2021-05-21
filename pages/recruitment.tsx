import Button from "@/components/Button"
import { HeroLayout } from "@/components/Layout"
import { MembershipBenefits } from "@/components/Recruitment"
import { Content } from "@/components/Typography"
import { CURRENTLY_RECRUITING, WRITTEN_APPLICATION_URL } from "@/constants"
import { Box, Grid, Typography } from "@material-ui/core"
import { getBase64 } from "@plaiceholder/base64"
import { getImage } from "@plaiceholder/next"
import { GetStaticProps } from "next"
import { BlurredImgProps } from "./_app"

export const getStaticProps: GetStaticProps = async () => {
	const imageIds = ["hero.jpeg"]
	const props: BlurredImgProps = {}

	for (const imageId of imageIds) {
		const imgSrc = `/images/recruitment/${imageId}`
		const imgFile = await getImage(imgSrc)
		const imgBase64 = await getBase64(imgFile)
		props[imageId] = { imgBase64, imgSrc }
	}

	return { props }
}

const RecruitmentPage: React.FC<BlurredImgProps> = (imgs) => {
	return (
		<HeroLayout
			seoTitle="Recruitment"
			heroTitle="Cohort Recruitment"
			imgBase64={imgs["hero.jpeg"].imgBase64}
			imgSrc={imgs["hero.jpeg"].imgSrc}
			content={{
				subtitle: "Get Involved",
				description:
					"Students interested in becoming cohort members of RSVP must participate in a highly competitive cohort recruitment process during the fall semester.",
			}}
		>
			{CURRENTLY_RECRUITING ? (
				<Grid item xs={12}>
					<Content header="Applications are Open!">
						<Typography variant="body1">
							The Road to Silicon V/Alley Program is currently recruiting for
							Cohort 3! See below for the benefits of becoming a cohort member
							and a brief outline of the recruitment process. Written
							applications are due at 11:59pm on Friday, October 8.
						</Typography>
						<Box width="100%" textAlign="center">
							<Button
								href={WRITTEN_APPLICATION_URL}
								target="_blank"
								rel="noopener"
								size="large"
							>
								Apply Now
							</Button>
						</Box>
					</Content>
				</Grid>
			) : (
				<></>
			)}
			<Grid item xs={12}>
				<Content header="Cohort Membership">
					<Typography variant="body1">
						A new cohort of students is inducted into the Road to Silicon
						V/Alley Program every fall semester. In addition to being introduced
						to a extensive network of entrepreneurial and innovative peers,
						cohort members gain access to all of the following benefits:
					</Typography>
					<div>
						<MembershipBenefits />
					</div>
				</Content>
			</Grid>
			<Grid item xs={12}>
				<Content header="Recruitment Process">
					<Typography variant="body1">
						All students are welcome to apply to the Road to Silicon V/Alley
						Program. There are no requirements in terms of GPA, graduation year,
						major, etc. No background in technology or entrepreneurship is
						necessary.
					</Typography>
					<Typography variant="body1">
						The recruitment process consists of a written application and a
						group activity. Candidates are judged by their ambition and passion
						to contribute to innovation at and beyond Rutgers University.
						Students accepted into RSVP are creative and express a strong desire
						to learn.
					</Typography>
				</Content>
			</Grid>
		</HeroLayout>
	)
}

export default RecruitmentPage
