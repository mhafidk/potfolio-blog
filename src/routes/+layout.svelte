<script>
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<main class="bg-white text-neutral-900">
	<Navbar />
	<div class="mx-auto max-w-(--breakpoint-sm) px-6">
		{@render children()}
	</div>
	<Footer />
</main>
