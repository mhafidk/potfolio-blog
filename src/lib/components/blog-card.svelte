<script>
	export let post;
</script>

<div
	class="flex h-96 flex-col items-center overflow-hidden rounded bg-lime-50 bg-opacity-50 shadow md:h-44 md:flex-row"
>
	<div class="h-1/2 w-full overflow-hidden md:h-full md:w-1/3">
		<img
			src={post.coverImage.url}
			alt={post.title}
			class="h-full w-full object-cover transition ease-in-out hover:scale-110"
		/>
	</div>
	<div class="h-1/2 w-full px-4 py-4 text-center md:h-fit md:w-2/3 md:py-0 md:text-left">
		<a href={`/blog/${post.slug}`} class="text-xl font-semibold text-lime-600 hover:text-lime-700"
			>{post.title}</a
		>
		<p class="my-2 line-clamp-4 text-justify text-base md:line-clamp-3">
			{post.description}
		</p>
		<div class="flex justify-center gap-4 pt-1 font-mono text-xs text-amber-600 md:justify-start">
			{#each post.tags as tag}
				<p>{tag}</p>
			{/each}
		</div>
	</div>
</div>
