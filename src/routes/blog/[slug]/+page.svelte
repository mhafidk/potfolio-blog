<script>
	import { marked } from 'marked';
	import { formatDate } from '$lib/helper';

	export let data;
	$: post = data.post;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div class="">
	<img src={post.coverImage.url} alt={post.title} class="h-96 w-full object-cover md:h-[32rem]" />
	<h1 class="mt-12 text-center text-4xl font-bold text-lime-600">{post.title}</h1>
	<div class="mt-6 flex items-center justify-center gap-8">
		<p class="text-center text-sm text-amber-600">{formatDate(post.createdAt)}</p>
	</div>
	<article
		class="prose prose-base mx-auto mt-8 max-w-screen-md px-4 prose-h2:leading-relaxed md:px-0"
	>
		{@html marked(post.content)}
	</article>
</div>

<style lang="postcss">
	h1 {
		line-height: 1.5;
	}
</style>
