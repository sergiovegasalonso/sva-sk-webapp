<script lang="ts">
	import '$root/app.css';
	import ToggleDrawerButton from '$shared/ui/atoms/buttons/toggle-drawer-button/ToggleDrawerButton.svelte';
	import favicon from '$shared/ui/atoms/icons/favicon/favicon.png';
	import Page from '$shared/ui/atoms/page/Page.svelte';
	import Drawer from '$shared/ui/organisms/drawer/Drawer.svelte';
	import Header from '$shared/ui/organisms/header/Header.svelte';
	import { QueryClientProvider } from '@tanstack/svelte-query';

	const { data, children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="keywords" content="HTML, CSS, JavaScript, SvelteKit, Svelte, TypeScript" />
	<meta name="author" content="Sergio Vegas Alonso" />
</svelte:head>

<Header />
<Drawer />
<QueryClientProvider client={data.queryClient}>
	<Page>
		{@render children()}
	</Page>
</QueryClientProvider>
<ToggleDrawerButton class="fixed right-4 bottom-4 z-90 lg:right-8 lg:bottom-8" />
<hr />
