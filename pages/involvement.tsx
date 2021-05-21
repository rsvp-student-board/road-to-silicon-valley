import { HeroLayout } from "@/components/Layout"
import { getBase64 } from "@plaiceholder/base64"
import { getImage } from "@plaiceholder/next"
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
		></HeroLayout>
	)
}

export default InvolvementPage
