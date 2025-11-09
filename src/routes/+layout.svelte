<script lang="ts">
	import favicon from '$lib/assets/favicon.png';
	import Footer from '$lib/components/footer/Footer.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import Page from '$lib/components/page/Page.svelte';
	import '$root/app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="keywords" content="HTML, CSS, JavaScript, SvelteKit, Svelte, TypeScript" />
	<meta name="author" content="Sergio Vegas Alonso" />
</svelte:head>

<Header />
<Navbar />
<Page>
	{@render children()}
</Page>
<Footer />
