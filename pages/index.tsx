import { SITE_NAME } from "@/constants"
import { NextSeo } from "next-seo"

const IndexPage: React.FC = () => {
	return (
		<>
			<NextSeo titleTemplate="%s" title={SITE_NAME} />
			<div style={{ height: 2000, background: "gray" }}></div>
		</>
	)
}

export default IndexPage
