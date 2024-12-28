<script>
	export let post;
</script>

<div class="flex h-36 items-center gap-4">
	<div class="hidden h-full w-1/3 overflow-hidden md:block">
		<img
			class="h-full w-full object-cover transition ease-in-out hover:scale-110"
			src={post.coverImage.url}
			alt={post.title}
		/>
	</div>
	<div class="w-full md:w-2/3">
		<a href={`/blog/${post.slug}`} class="text-lg font-medium text-lime-600 hover:text-lime-700"
			>{post.title}</a
		>
		<p class="mt-2 line-clamp-4 text-neutral-700 md:line-clamp-3">
			{post.description}
		</p>
		<div class="mt-3 flex gap-4 font-mono text-xs text-amber-600">
			{#each post.tags as tag}
				<p>{tag}</p>
			{/each}
		</div>
	</div>
</div>
