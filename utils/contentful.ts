import { Student } from "@/content"
import { gql, GraphQLClient } from "graphql-request"

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`

const graphQLClient = new GraphQLClient(endpoint, {
	headers: {
		authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
	},
})

export const getCohortMembers = async (): Promise<{
	studentCollection: { items: Student[] }
}> => {
	const query = gql`
		{
			studentCollection(
				where: { OR: [{ alumnus: false }, { alumnus_exists: false }] }
			) {
				items {
					fullName
					cohort
					email
					linkedIn
					headshot {
						url
					}
					slug
				}
			}
		}
	`

	return graphQLClient.request(query)
}

export const getStudent = async (
	slug: string
): Promise<{
	studentCollection: { items: Student[] }
}> => {
	const query = gql`
		query getStudent($slug: String!) {
			studentCollection(where: { slug: $slug }) {
				items {
					sys {
						id
					}
					fullName
					cohort
					graduationYear
					majors
					minors
					concentrations
					email
					linkedIn
					company
					role
					studentBoardPosition
					committeeMembership
					description
					alumnus
					headshot {
						url
					}
				}
			}
		}
	`

	return graphQLClient.request(query, {
		slug,
	})
}

export const getAlumni = async (): Promise<{
	studentCollection: { items: Student[] }
}> => {
	const query = gql`
		{
			studentCollection(where: { alumnus: true }) {
				items {
					fullName
					cohort
					graduationYear
					majors
					minors
					concentrations
					email
					linkedIn
					company
					role
					studentBoardPosition
					committeeMembership
					description
					alumnus
					headshot {
						url
					}
				}
			}
		}
	`

	return graphQLClient.request(query)
}

export const getStudentBoard = async (): Promise<{
	studentCollection: { items: Student[] }
}> => {
	const query = gql`
		{
			studentCollection(where: { studentBoardPosition_exists: true }) {
				items {
					fullName
					cohort
					studentBoardPosition
					email
					linkedIn
					headshot {
						url
					}
					slug
				}
			}
		}
	`

	return graphQLClient.request(query)
}

export const getCommitteeMembers = async (): Promise<{
	studentCollection: { items: Student[] }
}> => {
	const query = gql`
		{
			studentCollection(where: { committeeMembership_exists: true }) {
				items {
					fullName
					cohort
					committeeMembership
					email
					linkedIn
					headshot {
						url
					}
					slug
				}
			}
		}
	`

	return graphQLClient.request(query)
}
