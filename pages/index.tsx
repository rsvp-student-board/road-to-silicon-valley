import { NextSeo } from "next-seo"
import Img from "react-optimized-image"
import LandingImg from "../images/landing.jpeg"

const IndexPage: React.FC = () => (
	<>
		<NextSeo titleTemplate="%s" title="Road to Silicon V/Alley" />
		{/* <Typography variant="h1">Road to Silicon V/Alley</Typography> */}
		<div style={{ background: "lightgrey", height: 2000 }}>
			<Img src={LandingImg} style={{ width: "100%" }} />
		</div>
	</>
)

export default IndexPage
