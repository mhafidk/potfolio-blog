<script>
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<main class="bg-white text-neutral-900">
	<Navbar />
	<div class="mx-auto max-w-screen-md px-6 py-6 md:py-14">
		{@render children()}
	</div>
	<Footer />
</main>
