<script>
	import BlogCard from '$lib/components/blog-card.svelte';

	export let data;
	let posts = data.posts;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="">
	<h1 class="text-2xl font-bold">Blog</h1>
	<div class="mt-10 grid grid-cols-1 gap-8 md:gap-4">
		{#each posts as post}
			<BlogCard {post} />
		{/each}
	</div>
</div>
