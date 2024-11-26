import { client } from '$lib/graphql-client';
import { postsQuery } from '$lib/graphql-queries';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const [postsReq] = await Promise.all([client.request(postsQuery)]);

	const { posts } = postsReq;

	return {
		posts
	};
}
