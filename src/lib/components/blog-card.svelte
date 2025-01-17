<script>
	export let post;
</script>

<div class="flex h-fit flex-col items-center gap-4 md:h-40 md:flex-row">
	<div class="block h-2/3 w-full overflow-hidden md:h-full md:w-1/3">
		<img
			class="h-48 w-full rounded object-cover transition ease-in-out hover:scale-110 md:h-full"
			src={post.coverImage.url}
			alt={post.title}
		/>
	</div>
	<div class="w-full text-center md:w-2/3 md:text-left">
		<a
			href={`/blog/${post.slug}`}
			class="text-xl font-semibold text-violet-600 hover:text-violet-700">{post.title}</a
		>
		<p class="mt-2 line-clamp-4 md:line-clamp-3">
			{post.description}
		</p>
		<div class="mt-3 flex justify-center gap-4 font-mono text-xs text-amber-600 md:justify-start">
			{#each post.tags as tag}
				<p>{tag}</p>
			{/each}
		</div>
	</div>
</div>
