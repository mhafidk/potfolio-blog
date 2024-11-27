<script>
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Header />
<div class="h-px w-full bg-neutral-400"></div>
<main class="bg-white pb-72 pt-14 text-neutral-900">
	<div class="mx-auto max-w-screen-lg px-4 text-lg">
		{@render children()}
	</div>
</main>
<div class="h-px w-full bg-neutral-400"></div>
<Footer />
