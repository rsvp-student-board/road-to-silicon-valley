import { Typography } from "@material-ui/core"
import { NextSeo } from "next-seo"

const IndexPage: React.FC = () => (
	<>
		<NextSeo titleTemplate="%s" title="Road to Silicon V/Alley" />
		<Typography variant="h1">Road to Silicon V/Alley</Typography>
	</>
)

export default IndexPage
