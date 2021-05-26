import { StudentInfo } from "@/components/Members"
import { Student } from "@/content"
import { getCohortMembers, getStudent } from "@/utils"
import { GetStaticPaths, GetStaticProps } from "next"
import { NextSeo } from "next-seo"

interface MemberPageProps {
	student: Student
}

export const getStaticPaths: GetStaticPaths = async () => {
	const cohortMembers = await getCohortMembers()

	return {
		paths: cohortMembers.studentCollection.items.map((student) => ({
			params: { slug: student.slug },
		})),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const slug = ([] as string[]).concat(context.params?.slug || "")[0]
	const students = await getStudent(slug)

	return {
		props: { student: students.studentCollection.items[0] },
		revalidate: 60,
	}
}

const MemberPage: React.FC<MemberPageProps> = ({ student }) => {
	return (
		<>
			<NextSeo title={student.fullName} />
			<StudentInfo student={student} />
		</>
	)
}

export default MemberPage
