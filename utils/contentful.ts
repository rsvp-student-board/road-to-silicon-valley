import { Student } from "@/content"
import { gql, GraphQLClient } from "graphql-request"

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`

const graphQLClient = new GraphQLClient(endpoint, {
	headers: {
		authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
	},
})

export const getStudents = async (): Promise<{
	studentCollection: { items: Student[] }
}> => {
	const query = gql`
		{
			studentCollection {
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
						width
						height
					}
				}
			}
		}
	`

	return graphQLClient.request(query)
}

export const getStudent = async (
	id: string
): Promise<{
	studentCollection: { items: Student[] }
}> => {
	const query = gql`
		query getStudent($slug: String!) {
			studentCollection(where: { sys: { id: $slug } }) {
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
						width
						height
					}
				}
			}
		}
	`

	return graphQLClient.request(query, {
		slug: id,
	})
}
