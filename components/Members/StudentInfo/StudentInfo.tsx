import { ContentContainer } from "@/components/Layout"
import Logo from "@/images/logo.svg"
import { Box, Container, Grid, IconButton, Typography } from "@material-ui/core"
import { Student } from "content/interfaces"
import Image from "next/image"
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai"
import useStudentInfoStyles from "./StudentInfo.styles"

interface StudentInfoProps {
	student: Student
}

const StudentInfo: React.FC<StudentInfoProps> = ({ student }) => {
	const {
		concentrations,
		email,
		fullName,
		graduationYear,
		majors,
		cohort,
		committeeMembership,
		company,
		description,
		headshot,
		linkedIn,
		minors,
		role,
		studentBoardPosition,
	} = student

	const classes = useStudentInfoStyles()

	return (
		<>
			<Container maxWidth="lg" style={{ padding: 0, position: "relative" }}>
				<Box width="100%" className={classes.gradient} />
				{/* <Box
					width="100%"
					height="100%"
					position="absolute"
					zIndex={10}
					left={0}
					top={0}
					className={classes.gradientOverlay}
				/> */}
			</Container>
			<ContentContainer containerClassName={classes.root}>
				<div className={classes.imgContainer}>
					<Box width="100%" paddingTop="100%" position="relative">
						<Box
							position="absolute"
							top={0}
							bottom={0}
							left={0}
							right={0}
							zIndex={99}
						>
							<Box
								width="100%"
								height="100%"
								position="relative"
								bgcolor="background.default"
							>
								{headshot ? (
									<Image
										src={headshot.url}
										alt={fullName}
										layout="fill"
										objectFit="cover"
										objectPosition="center center"
										quality={50}
									/>
								) : (
									<Box
										display="flex"
										justifyContent="center"
										alignItems="center"
										height="100%"
										width="100%"
									>
										<Logo />
									</Box>
								)}
							</Box>
						</Box>
					</Box>
				</div>
				<Grid item xs={12} className={classes.nameContainer}>
					<Grid
						container
						justify="space-between"
						alignItems="flex-end"
						className={classes.nameGrid}
					>
						<Grid item xs={10} sm="auto">
							<Typography variant="h1" className={classes.name}>
								{fullName}
							</Typography>
							{studentBoardPosition && (
								<Typography variant="h2" className={classes.position}>
									{studentBoardPosition}
								</Typography>
							)}
							{committeeMembership && (
								<Typography variant="h2" className={classes.position}>
									{committeeMembership}
								</Typography>
							)}
							<Typography variant="h3" className={classes.cohortGrad}>
								{cohort ? (
									<>
										Cohort <span>{cohort}</span> ⋅
									</>
								) : (
									""
								)}{" "}
								Class of <span>{graduationYear}</span>
							</Typography>
						</Grid>
						<Grid item xs={2} sm="auto">
							<IconButton
								href={`mailto:${email}`}
								color="primary"
								className={classes.link}
							>
								<AiOutlineMail />
							</IconButton>

							{linkedIn && (
								<IconButton
									href={linkedIn}
									target="_blank"
									rel="noopener"
									color="primary"
									className={classes.link}
								>
									<AiOutlineLinkedin />
								</IconButton>
							)}
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={6} md={5} className={classes.infoContainer}>
					<Grid container spacing={4}>
						{company && role && (
							<Grid item xs={12}>
								<Grid container spacing={1}>
									<Grid item xs={12}>
										<Typography className={classes.infoDescriptor}>
											Company
										</Typography>
										<div>
											<Typography className={classes.infoItemText}>
												{company}
											</Typography>
										</div>
									</Grid>
									<Grid item xs={12}>
										<Typography className={classes.infoDescriptor}>
											Role
										</Typography>
										<div>
											<Typography className={classes.infoItemText}>
												{role}
											</Typography>
										</div>
									</Grid>
								</Grid>
							</Grid>
						)}
						<Grid item xs={12}>
							<Grid container spacing={1}>
								<Grid item xs={12}>
									<Typography className={classes.infoDescriptor}>
										{majors.length > 1 ? "Majors" : "Major"}
									</Typography>
									<div>
										{majors.map((major) => (
											<Typography
												className={classes.infoItemText}
												key={`${fullName}-major-${major}`}
											>
												{major}
											</Typography>
										))}
									</div>
								</Grid>
								{minors && (
									<>
										<Grid item xs={12}>
											<Typography className={classes.infoDescriptor}>
												{minors.length > 1 ? "Minors" : "Minor"}
											</Typography>
											<div>
												{minors.map((minor) => (
													<Typography
														className={classes.infoItemText}
														key={`${fullName}-minor-${minor}`}
													>
														{minor}
													</Typography>
												))}
											</div>
										</Grid>
									</>
								)}
								{concentrations && (
									<Grid item xs={12}>
										<Typography className={classes.infoDescriptor}>
											{concentrations.length > 1
												? "Concentrations"
												: "Concentration"}
										</Typography>
										<div>
											{concentrations.map((concentration) => (
												<Typography
													className={classes.infoItemText}
													key={`${fullName}-concentration-${concentration}`}
												>
													{concentration}
												</Typography>
											))}
										</div>
									</Grid>
								)}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				{description ? (
					<Grid item xs={12} sm={6} md={7} className={classes.infoContainer}>
						<Typography className={classes.infoDescriptor}>About</Typography>
						<Typography variant="body1" className={classes.description}>
							{description}
						</Typography>
					</Grid>
				) : (
					<> </>
				)}
			</ContentContainer>
		</>
	)
}

export default StudentInfo

{
	/* <Box width="100%" paddingTop="150%" position="relative">
					<Box
						position="absolute"
						top={0}
						bottom={0}
						left={0}
						right={0}
						zIndex={99}
					>
						<Box
							width="100%"
							height="100%"
							position="relative"
							bgcolor="background.default"
						>
							{headshot ? (
								<Image
									src={student.headshot.url}
									alt={student.fullName}
									layout="fill"
									objectFit="cover"
									objectPosition="center center"
									quality={50}
								/>
							) : (
								<Box
									display="flex"
									justifyContent="center"
									alignItems="center"
									height="100%"
									width="100%"
								>
									<Logo />
								</Box>
							)}
						</Box>
					</Box>
				</Box>
			</Grid>
			<Grid item xs={12} sm={8} className={classes.infoContainer}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography variant="h1" className={classes.name}>
							{student.fullName}
						</Typography>
						{student.studentBoardPosition && (
							<Typography variant="h2" className={classes.position}>
								{student.studentBoardPosition}
							</Typography>
						)}
						{student.committeeMembership && (
							<Typography variant="h2" className={classes.position}>
								{student.committeeMembership}
							</Typography>
						)}
					</Grid>

					<Grid item xs={12}>
						<Typography variant="body1" className={classes.number}>
							Class of <span>{student.graduationYear}</span>
						</Typography>
						{student.cohort && (
							<Typography variant="body1" className={classes.number}>
								Cohort <span>{student.cohort}</span>
							</Typography>
						)}
					</Grid>
					<Grid item xs={12}>
						<Grid container spacing={1}>
							<Grid
								item
								xs={12}
								sm={schoolInfoItems === 2 ? 6 : 12}
								className={classes.infoGridItem}
							>
								<Typography className={classes.infoDescriptor}>
									{student.majors.length > 1 ? "Majors" : "Major"}
								</Typography>
								<div className={classes.infoItem}>
									{student.majors.map((major) => (
										<Typography
											className={classes.infoItemText}
											key={`${student.fullName}-major-${major}`}
										>
											{major}
										</Typography>
									))}
								</div>
							</Grid>
							{student.minors && (
								<>
									<Grid
										item
										xs={12}
										sm={schoolInfoItems === 2 ? 6 : 5}
										className={classes.infoGridItem}
									>
										<Typography className={classes.infoDescriptor}>
											{student.minors.length > 1 ? "Minors" : "Minor"}
										</Typography>
										<div className={classes.infoItem}>
											{student.minors.map((minor) => (
												<Typography
													className={classes.infoItemText}
													key={`${student.fullName}-minor-${minor}`}
												>
													{minor}
												</Typography>
											))}
										</div>
									</Grid>
								</>
							)}

							{student.concentrations && (
								<Grid
									item
									xs={12}
									sm={schoolInfoItems === 2 ? 6 : 5}
									className={classes.infoGridItem}
								>
									<Typography className={classes.infoDescriptor}>
										{student.concentrations.length > 1
											? "Concentrations"
											: "Concentration"}
									</Typography>
									<div className={classes.infoItem}>
										{student.concentrations.map((concentration) => (
											<Typography
												className={classes.infoItemText}
												key={`${student.fullName}-concentration-${concentration}`}
											>
												{concentration}
											</Typography>
										))}
									</div>
								</Grid>
							)}
						</Grid>
					</Grid>

					{student.company && student.role && (
						<Box>
							<Typography className={classes.infoDescriptor}>
								Company
							</Typography>
							<div className={classes.infoItem}>
								<Typography>{student.company}</Typography>
							</div>
							<Typography className={classes.infoDescriptor}>Role</Typography>
							<div className={classes.infoItem}>
								<Typography>{student.role}</Typography>
							</div>
						</Box>
					)}
				</Grid> */
}
