<script lang="ts">
	import favicon from '$lib/assets/favicon.png';
	import DrawerButton from '$lib/components/atoms/buttons/drawer-button/DrawerButton.svelte';
	import Page from '$lib/components/atoms/page/Page.svelte';
	import Footer from '$lib/components/organisms/footer/Footer.svelte';
	import Header from '$lib/components/organisms/header/Header.svelte';
	import Navbar from '$lib/components/organisms/navbar/Navbar.svelte';
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
<DrawerButton class="fixed right-4 bottom-4 lg:right-8 lg:bottom-8" />
<Footer />
