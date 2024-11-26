<script>
	export let post;
</script>

<div class="flex h-44 items-center gap-4">
	<div class="h-full w-1/3 overflow-hidden rounded">
		<img
			src={post.coverImage.url}
			alt={post.title}
			class="h-full w-full rounded object-cover transition ease-in-out hover:scale-110"
		/>
	</div>
	<div class="w-2/3">
		<a href={`/blog/${post.slug}`} class="text-xl font-semibold text-lime-500 hover:text-lime-400"
			>{post.title}</a
		>
		<p class="my-2 line-clamp-3">
			{post.description}
		</p>
		<div class="flex gap-4 pt-1 font-mono text-xs text-amber-400">
			{#each post.tags as tag}
				<p>{tag}</p>
			{/each}
		</div>
	</div>
</div>
