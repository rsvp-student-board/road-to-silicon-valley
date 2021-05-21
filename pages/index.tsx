import { Introduction, Landing } from "@/components/Home"
import { SITE_NAME } from "@/constants"
import { getBase64 } from "@plaiceholder/base64"
import { getImage } from "@plaiceholder/next"
import { GetStaticProps } from "next"
import { NextSeo } from "next-seo"
import { BlurredImgProps } from "./_app"

export const getStaticProps: GetStaticProps = async () => {
	const imageIds = ["landing.jpg", "students.jpeg", "partners.jpeg"]
	const props: BlurredImgProps = {}

	for (const imageId of imageIds) {
		const imgSrc = `/images/home/${imageId}`
		const imgFile = await getImage(imgSrc)
		const imgBase64 = await getBase64(imgFile)
		props[imageId] = { imgBase64, imgSrc }
	}

	return { props }
}

const IndexPage: React.FC<BlurredImgProps> = (imgs) => {
	return (
		<>
			<NextSeo titleTemplate="%s" title={SITE_NAME} />
			<Landing
				imgBase64={imgs["landing.jpg"].imgBase64}
				imgSrc={imgs["landing.jpg"].imgSrc}
			/>
			<Introduction
				imgBase64s={{
					partners: imgs["partners.jpeg"].imgBase64,
					students: imgs["students.jpeg"].imgBase64,
				}}
				imgSrcs={{
					partners: imgs["partners.jpeg"].imgSrc,
					students: imgs["students.jpeg"].imgSrc,
				}}
			/>
		</>
	)
}

export default IndexPage
