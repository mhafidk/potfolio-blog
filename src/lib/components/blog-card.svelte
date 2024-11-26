<script>
	export let post;
</script>

<div class="flex h-96 flex-col items-center gap-4 md:h-44 md:flex-row">
	<div class="h-1/2 w-full overflow-hidden rounded md:h-full md:w-1/3">
		<img
			src={post.coverImage.url}
			alt={post.title}
			class="h-full w-full rounded object-cover transition ease-in-out hover:scale-110"
		/>
	</div>
	<div class="h-1/2 w-full text-center md:h-fit md:w-2/3 md:text-left">
		<a href={`/blog/${post.slug}`} class="text-2xl font-semibold text-lime-500 hover:text-lime-400"
			>{post.title}</a
		>
		<p class="my-2 line-clamp-4 text-justify md:line-clamp-3">
			{post.description}
		</p>
		<div class="flex justify-center gap-4 pt-1 font-mono text-xs text-amber-400 md:justify-start">
			{#each post.tags as tag}
				<p>{tag}</p>
			{/each}
		</div>
	</div>
</div>
