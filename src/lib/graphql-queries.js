import { gql } from 'graphql-request';

const POST_FRAGMENT = gql`
	fragment PostDetails on Post {
		slug
		title
		updatedAt
		createdAt
		tags
		description
		content
		coverImage {
			url
		}
	}
`;

export const postsQuery = gql`
	${POST_FRAGMENT}
	query GetPosts {
		posts(orderBy: createdAt_DESC) {
			...PostDetails
		}
	}
`;

export const postsQueryIndex = gql`
	${POST_FRAGMENT}
	query GetPosts {
		posts(orderBy: createdAt_DESC, first: 4) {
			...PostDetails
		}
	}
`;

export const postQuery = gql`
	${POST_FRAGMENT}
	query GetPost($slug: String!) {
		post(where: { slug: $slug }) {
			...PostDetails
		}
	}
`;
