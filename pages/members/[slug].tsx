import { Student } from "@/content"
import { getStudent, getStudents } from "@/utils"
import { Typography } from "@material-ui/core"
import { GetStaticPaths, GetStaticProps } from "next"
import { NextSeo } from "next-seo"

interface MemberPageProps {
	student: Student
}

export const getStaticPaths: GetStaticPaths = async () => {
	const students = await getStudents()

	return {
		paths: students.studentCollection.items.map((student) => ({
			params: { slug: student.sys.id },
		})),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const id = ([] as string[]).concat(context.params?.slug || "")[0]
	const students = await getStudent(id)

	return {
		props: { student: students.studentCollection.items[0] },
		revalidate: 60,
	}
}

const MemberPage: React.FC<MemberPageProps> = ({ student }) => {
	return (
		<>
			<NextSeo title={student.fullName} />
			<div style={{ paddingTop: 500 }}>
				<Typography variant="body1">{student.fullName}</Typography>
			</div>
		</>
	)
}

export default MemberPage
