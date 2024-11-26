import { client } from '$lib/graphql-client';
import { postsQueryIndex } from '$lib/graphql-queries';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const [postsReq] = await Promise.all([client.request(postsQueryIndex)]);

	const { posts } = postsReq;

	return {
		posts
	};
}
