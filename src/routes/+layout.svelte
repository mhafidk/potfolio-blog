<script>
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Header />
<main class="bg-neutral-900 text-neutral-100">
	<div class="mx-auto max-w-screen-md">
		{@render children()}
	</div>
</main>
<Footer />
