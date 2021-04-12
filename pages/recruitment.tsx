import { HeroLayout } from "@/components/Layout"
import { MembershipBenefits } from "@/components/Recruitment"
import { Content, Header } from "@/components/Typography"
import { MEMBERSHIP_INTRO } from "@/content"
import { Grid, Typography } from "@material-ui/core"
import { getBase64 } from "@plaiceholder/base64"
import { getImage } from "@plaiceholder/next"
import { GetStaticProps } from "next"
import { HeroPageProps } from "./_app"

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

const RecruitmentPage: React.FC<HeroPageProps> = ({ imgBase64, imgSrc }) => {
	return (
		<HeroLayout
			title="Recruitment"
			imgBase64={imgBase64}
			imgSrc={imgSrc}
			imgPosition="center center"
		>
			<Grid item xs={12}>
				<Header>Cohort Membership</Header>
				<Content>
					<Typography variant="body1">{MEMBERSHIP_INTRO}</Typography>
					<MembershipBenefits />
				</Content>
			</Grid>
		</HeroLayout>
	)
}

export default RecruitmentPage
