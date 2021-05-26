import { HeroLayout } from "@/components/Layout"
import StudentCard from "@/components/StudentCard"
import { Content, Header } from "@/components/Typography"
import { Student } from "@/content"
import { getCohortMembers } from "@/utils"
import { Box, Grid, Typography } from "@material-ui/core"
import { getBase64 } from "@plaiceholder/base64"
import { getImage } from "@plaiceholder/next"
import { GetStaticProps } from "next"
import { useEffect, useState } from "react"
import { BlurredImgProps } from "../_app"

interface MembersPageProps {
	imgs: BlurredImgProps
	students: Student[]
}

export const getStaticProps: GetStaticProps = async () => {
	const imageIds = ["hero.jpeg"]
	const imgs: BlurredImgProps = {}

	for (const imageId of imageIds) {
		const imgSrc = `/images/members/${imageId}`
		const imgFile = await getImage(imgSrc)
		const imgBase64 = await getBase64(imgFile)
		imgs[imageId] = { imgBase64, imgSrc }
	}

	const cohortMembers = await getCohortMembers()

	return {
		props: { imgs, students: cohortMembers.studentCollection.items },
		revalidate: 60,
	}
}

const MembersPage: React.FC<MembersPageProps> = ({ imgs, students }) => {
	const [cohorts, setCohorts] = useState<{
		[x: number]: Student[]
	}>({})

	const groupByCohort = () =>
		students.reduce(
			(
				result: {
					[key: number]: Student[]
				},
				item
			) => {
				const cohort = item.cohort || -1
				return {
					...result,
					[cohort]: [...(result[cohort] || []), item],
				}
			},
			{}
		)

	useEffect(() => {
		if (students) {
			setCohorts(groupByCohort())
		}
	}, [students])

	return (
		<HeroLayout
			seoTitle="Cohort Members"
			heroTitle="Active Cohort Members"
			imgBase64={imgs["hero.jpeg"].imgBase64}
			imgSrc={imgs["hero.jpeg"].imgSrc}
			imgPosition="center 35%"
			content={{
				subtitle: "Students",
				numbers: [
					{
						number: 2,
						title: "Cohorts",
					},
					{
						number: 104,
						title: "Active Cohort Members",
					},
				],
			}}
		>
			{Object.entries(cohorts)
				.sort((e1, e2) => parseInt(e1[0]) - parseInt(e2[0]))
				.map(([cohort, students], cohortIndex) => {
					return cohort !== "-1" ? (
						<Grid item xs={12} key={`cohort-${cohort}`}>
							<Content>
								<Grid
									container
									justify="space-between"
									alignItems="flex-end"
									className="no-margin"
								>
									<Grid item>
										<Header>Cohort {cohort}</Header>
									</Grid>
									<Grid item>
										<Box
											marginBottom={2.5}
											paddingBottom={0.75}
											lineHeight={1}
											color="grey.700"
											fontStyle="italic"
											width="100%"
										>
											<Typography variant="body1" align="right">
												{2019 + cohortIndex}
											</Typography>
										</Box>
									</Grid>
								</Grid>

								<Grid container spacing={2}>
									{students.map((student, studentIndex) => (
										<Grid
											item
											xs={6}
											sm={4}
											md={3}
											key={`student-${student.slug}`}
										>
											<StudentCard
												student={student}
												alternateColor={studentIndex % 2 === 1}
											/>
										</Grid>
									))}
								</Grid>
							</Content>
						</Grid>
					) : (
						<> </>
					)
				})}
		</HeroLayout>
	)
}

export default MembersPage
