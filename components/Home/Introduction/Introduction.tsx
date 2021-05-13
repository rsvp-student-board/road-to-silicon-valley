// import { ContentContainer } from "@/components/Layout"
// import { Content } from "@/components/Typography"
// import { DONATION_URL } from "@/constants"
// import { INTRODUCTION, TAGLINE } from "@/content"
// import { Box, Button, Grid, Typography } from "@material-ui/core"
import Button from "@/components/Button"
import { ContentContainer } from "@/components/Layout"
import { Content } from "@/components/Typography"
// import Logo from "@/images/logo.svg"
import {
	Box,
	Container,
	Grid,
	Theme,
	Typography,
	useMediaQuery,
} from "@material-ui/core"
import { DONATION_URL } from "constants/contact"
import { DISCIPLINES } from "content/about"
import FeaturedBox from "./FeaturedBox"
import useIntroductionStyles from "./Introduction.styles"

interface IntroductionProps {
	imgBase64s: { students: string; partners: string }
	imgSrcs: { students: string; partners: string }
}

const Introduction: React.FC<IntroductionProps> = ({ imgBase64s, imgSrcs }) => {
	const isMediumScreen = useMediaQuery((theme: Theme) =>
		theme.breakpoints.up("md")
	)
	const classes = useIntroductionStyles()

	return (
		<Box bgcolor="primary.main" width="100%">
			<ContentContainer
				boxClassName={classes.box}
				containerClassName={classes.container}
			>
				<Grid item xs={12} md={7}>
					<Grid container spacing={isMediumScreen ? 5 : 4}>
						{/* <Grid item xs={12} sm={2} className={classes.logoContainer}>
							<Box className={classes.logoWrapper}>
								<Logo className={classes.logo} />
							</Box>
						</Grid> */}
						<Grid item xs={12} sm={12} className={classes.taglineContainer}>
							<Typography variant="h3" className={classes.tagline}>
								Leading a Revolutionary Institution to Tomorrow’s Innovation.
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Content>
								<Typography variant="body1">
									The Road to Silicon V/Alley Program (RSVP) leverages Rutgers’
									world class academic resources and prime geographical location
									to establish a new hub of innovation, learning, and
									collaboration between existing innovation hubs from coast to
									coast.
								</Typography>
								<Typography variant="body1">
									Housed and led by Rutgers Business School, RSVP invites RU
									students of all disciplines to enhance their education through
									a curriculum designed to prepare them for corporate leadership
									in innovation (intrapreneurship) and entrepreneurship in a
									digital age.
								</Typography>
								<Typography variant="body1">
									In addition to its program elements, RSVP connects
									enterprising students, faculty, alumni and corporate partners
									to share ideas, investment opportunities, and intellectual
									capital. Students will have access to a network of mentors and
									specialized job and internship placement. Corporate partners
									will have access to a talented and prepared pipeline of RU
									intrapreneurs, innovators, and creatives with a strong balance
									of technical skills, business acumen, and critical soft
									success skills. Corporate partners can collaborate in new
									curriculum design and the development of innovation labs,
									incubators, accelerators, and institutes.
								</Typography>
								{/* <Typography variant="body1">
									Interested in getting involved with RSVP? If you are a
									student, check out the{" "}
									<Link href="/recruitment" passHref>
										<Hyperlink>recruitment</Hyperlink>
									</Link>{" "}
									page to see how to become a member of RSVP's next cohort.
									Otherwise, take a look at the{" "}
									<Link href="/involvement" passHref>
										<Hyperlink>involvement opportunities</Hyperlink>
									</Link>{" "}
									available to you!
								</Typography> */}
							</Content>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} md={5} className={classes.boxesGridItem}>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={6} md={12}>
							<FeaturedBox
								imgBase64={imgBase64s.students}
								imgSrc={imgSrcs.students}
								title="Opportunities for Students"
								link="/recruitment"
							>
								Cohort members of RSVP are engaged in a comprehensive curriculum
								that aids their entrepreneurial development. They are also
								presented with multiple career-advancing opportunities and an
								extensive network of innovators.
							</FeaturedBox>
						</Grid>
						<Grid item xs={12} sm={6} md={12}>
							<FeaturedBox
								imgBase64={imgBase64s.partners}
								imgSrc={imgSrcs.partners}
								title="Opportunities for Partners"
								link="/involvement"
								alternateColor
							>
								RSVP's corporate and alumni partners can pipeline access to the
								program's industry-ready students. They have access to not only
								numerous investment opportunities, but also the chance to join
								the RSVP Advisory Board.
							</FeaturedBox>
						</Grid>
					</Grid>
				</Grid>

				{/* <Grid item xs={12}>
					<Content>
						<Typography variant="body1">
							The Road to Silicon V/Alley Program (RSVP) leverages Rutgers’
							world class academic resources and prime geographical location to
							establish a new hub of innovation, learning, and collaboration
							between existing innovation hubs from coast to coast.
						</Typography>
						<Typography variant="body1">
							Housed and led by Rutgers Business School, RSVP invites RU
							students of all disciplines to enhance their education through a
							curriculum designed to prepare them for corporate leadership in
							innovation (intrapreneurship) and entrepreneurship in a digital
							age.
						</Typography>
						<Typography variant="body1">
							In addition to its program elements, RSVP connects enterprising
							students, faculty, alumni and corporate partners to share ideas,
							investment opportunities, and intellectual capital. Students will
							have access to a network of mentors and specialized job and
							internship placement. Corporate partners will have access to a
							talented and prepared pipeline of RU intrapreneurs, innovators,
							and creatives with a strong balance of technical skills, business
							acumen, and critical soft success skills. Corporate partners can
							collaborate in new curriculum design and the development of
							innovation labs, incubators, accelerators, and institutes.
						</Typography>
						<Typography variant="body1">
							Interested in getting involved with RSVP? If you are a student,
							check out the{" "}
							<Link href="/recruitment" passHref>
								<Hyperlink>recruitment</Hyperlink>
							</Link>{" "}
							page to see how to become a member of RSVP's next cohort.
							Otherwise, take a look at the{" "}
							<Link href="/involvement" passHref>
								<Hyperlink>involvement opportunities</Hyperlink>
							</Link>{" "}
							available to you!
						</Typography>
					</Content>
				</Grid> */}
				<Grid item xs={12}>
					<Container maxWidth="sm">
						<Grid container spacing={1}>
							{DISCIPLINES.map((discipline, index) => (
								<Grid
									item
									xs={index === Math.floor(DISCIPLINES.length / 2) ? 12 : 6}
									className={classes.disciplineGridItem}
									key={`discipline ${discipline.title}`}
								>
									<div className={classes.disciplineIcon}>
										{discipline.icon}
									</div>
									<Typography
										variant="body1"
										className={classes.disciplineTitle}
									>
										{discipline.title}
									</Typography>
								</Grid>
							))}
						</Grid>
					</Container>
				</Grid>
				<Grid item xs={12}>
					<Box textAlign="center" width="100%">
						<Button
							href={DONATION_URL}
							target="_blank"
							rel="noopener"
							size="large"
						>
							Support RSVP
						</Button>
					</Box>
				</Grid>
			</ContentContainer>
		</Box>

		// <Box mx="auto" position="relative" className={classes.root}>
		// 	<Box
		// 		mx="auto"
		// 		width="100%"
		// 		height={1000}
		// 		position="relative"
		// 		zIndex={90}
		// 		bgcolor="background.paper"
		// 		className={classes.container}
		// 	>
		// 		<Box
		// 			display="flex"
		// 			justifyContent="center"
		// 			alignItems="center"
		// 			position="absolute"
		// 			zIndex={91}
		// 			top={0}
		// 			bgcolor="background.paper"
		// 			className={classes.logoContainer}
		// 		>
		// 			<Logo className={classes.logo} />
		// 		</Box>

		// 	</Box>
		// 	<Box
		// 		position="absolute"
		// 		zIndex={89}
		// 		top={0}
		// 		right={0}
		// 		height="100%"
		// 		width="50%"
		// 		bgcolor="background.paper"
		// 	/>
		// </Box>

		// <ContentContainer>
		// 	<Grid item xs={12}>
		// 		<Typography variant="h4" className={classes.tagline}>
		// 			{TAGLINE}
		// 		</Typography>
		// 	</Grid>
		// 	<Grid item xs={12}>
		// 		<Content>
		// 			{INTRODUCTION.map((paragraph, index) => (
		// 				<Typography variant="body1" key={`introduction-${index}`}>
		// 					{paragraph}
		// 				</Typography>
		// 			))}
		// 			<Box width="100%" textAlign="center">
		// 				<Button
		// 					variant="outlined"
		// 					color="primary"
		// 					href={DONATION_URL}
		// 					target="_blank"
		// 					rel="noopener"
		// 				>
		// 					Support RSVP
		// 				</Button>
		// 			</Box>
		// 		</Content>
		// 	</Grid>
		// </ContentContainer>
	)
}

export default Introduction
