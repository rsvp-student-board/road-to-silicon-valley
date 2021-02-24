import { CONTACT_ITEMS, SITE_NAME } from "@/constants"
import { Box, Container, Link, Typography } from "@material-ui/core"
import useFooterStyles from "./Footer.styles"

const Footer: React.FC = () => {
	const classes = useFooterStyles()

	return (
		<Box component="footer" width="100%" bgcolor="common.black" py={2}>
			<Container maxWidth="lg">
				<Box width="100%" textAlign="center" color="common.white">
					{CONTACT_ITEMS.map((contactItem, index) => (
						<Link
							href={contactItem.url}
							target="_blank"
							rel="noopener"
							title={contactItem.title}
							className={classes.link}
							key={`footer-contact-${index}`}
						>
							{contactItem.icon}
						</Link>
					))}
					<Typography className={classes.copyright}>
						© {new Date().getFullYear()} {SITE_NAME}
					</Typography>
				</Box>
			</Container>
		</Box>
	)
}

export default Footer
