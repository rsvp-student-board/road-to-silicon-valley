import { Typography } from "@material-ui/core"
import { NextSeo } from "next-seo"

const IndexPage: React.FC = () => (
	<>
		<NextSeo titleTemplate="%s" title="Road to Silicon V/Alley" />
		{/* <Typography variant="h1">Road to Silicon V/Alley</Typography> */}
		<div style={{ background: "lightgrey", height: 2000, paddingTop: 500 }}>
			<Typography variant="h1">Road to Silicon V/Alley</Typography>
		</div>
	</>
)

export default IndexPage
