<script>
	import BlogCard from '$lib/components/blog-card.svelte';

	export let data;
	let posts = data.posts;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="h-screen">
	<h1 class="text-center text-4xl font-bold text-lime-500">Blog</h1>
	<div class="mb-8 mt-16 grid grid-cols-1 gap-6">
		{#each posts as post}
			<BlogCard {post} />
		{/each}
	</div>
</div>
