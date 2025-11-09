<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.png';
	import Header from '$lib/components/header/Header.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import Page from '$lib/components/page/Page.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
<Navbar />
<Page>
	{@render children()}
</Page>
<Footer />
