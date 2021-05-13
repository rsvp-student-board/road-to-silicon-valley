import { HeroLayout } from "@/components/Layout"
import { MembershipBenefits } from "@/components/Recruitment"
import { Content, Header } from "@/components/Typography"
import { CURRENTLY_RECRUITING, WRITTEN_APPLICATION_URL } from "@/constants"
import { APPLY_NOW, MEMBERSHIP_INTRO, RECRUITMENT_INFO } from "@/content"
import { Box, Button, Grid, Typography } from "@material-ui/core"
import { getBase64 } from "@plaiceholder/base64"
import { getImage } from "@plaiceholder/next"
import { GetStaticProps } from "next"
import { BlurredImgProps } from "./_app"

export const getStaticProps: GetStaticProps = async () => {
	const imgSrc = "/images/heros/recruitment.jpeg"
	const img = await getImage(imgSrc)
	const imgBase64 = await getBase64(img)

	return {
		props: {
			imgBase64,
			imgSrc,
		},
	}
}

const RecruitmentPage: React.FC<BlurredImgProps> = ({ imgBase64, imgSrc }) => {
	return (
		<HeroLayout
			title="Recruitment"
			imgBase64={imgBase64}
			imgSrc={imgSrc}
			imgPosition="center center"
		>
			{CURRENTLY_RECRUITING && (
				<Grid item xs={12}>
					<Header>Applications are Open!</Header>
					<Content>
						<Typography variant="body1">{APPLY_NOW}</Typography>
						<Box width="100%" textAlign="center">
							<Button
								variant="outlined"
								color="primary"
								href={WRITTEN_APPLICATION_URL}
								target="_blank"
								rel="noopener"
							>
								Apply Now
							</Button>
						</Box>
					</Content>
				</Grid>
			)}
			<Grid item xs={12}>
				<Header>Cohort Membership</Header>
				<Content>
					<Typography variant="body1">{MEMBERSHIP_INTRO}</Typography>
					<MembershipBenefits />
				</Content>
			</Grid>
			<Grid item xs={12}>
				<Header>Recruitment Process</Header>
				<Content>
					{RECRUITMENT_INFO.map((paragraph, index) => (
						<Typography variant="body1" key={`recruitment-info-${index}`}>
							{paragraph}
						</Typography>
					))}
				</Content>
			</Grid>
		</HeroLayout>
	)
}

export default RecruitmentPage
