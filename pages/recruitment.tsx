import { HeroLayout } from "@/components/Layout"
import { getBase64 } from "@plaiceholder/base64"
import { getImage } from "@plaiceholder/next"
import { GetStaticProps } from "next"
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

const RecruitmentPage: React.FC<HeroPageProps> = ({ imgBase64, imgSrc }) => {
	return (
		<HeroLayout
			title="Recruitment"
			imgBase64={imgBase64}
			imgSrc={imgSrc}
			imgPosition="center 65%"
		></HeroLayout>
	)
}

export default RecruitmentPage
