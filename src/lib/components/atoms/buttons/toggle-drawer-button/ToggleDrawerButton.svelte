<script lang="ts">
	import Button from '$lib/components/atoms/buttons/Button.svelte';
	import CloseIcon from '$lib/components/atoms/icons/close/Close.svelte';
	import MenuIcon from '$lib/components/atoms/icons/menu/Menu.svelte';
	import Space from '$lib/components/atoms/space/Space.svelte';
	import { m } from '$lib/i18n/messages.js';
	import { drawerState } from '$lib/states/drawer-state.svelte.js';

	let { class: className = '' } = $props();

	function toggleMenu(): void {
		drawerState.open = !drawerState.open;
	}
</script>

<Button ariaLabel={m.toggle_menu()} class={className} onclick={toggleMenu}>
	{#if drawerState.open}
		<CloseIcon />
	{:else}
		<MenuIcon />
	{/if}
	<div class="hidden lg:flex">
		<Space />
		<span>{m.menu()}</span>
	</div>
</Button>
