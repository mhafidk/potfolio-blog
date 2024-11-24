<script>
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Header />
<div class="h-px w-full bg-neutral-600"></div>
<main class="bg-neutral-900 pb-72 pt-14 text-neutral-200">
	<div class="mx-auto max-w-screen-md px-4 text-lg">
		{@render children()}
	</div>
</main>
<div class="h-px w-full bg-neutral-600"></div>
<Footer />
