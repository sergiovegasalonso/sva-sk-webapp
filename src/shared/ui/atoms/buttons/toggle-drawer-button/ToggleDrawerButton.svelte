<script lang="ts">
	import { m } from '$lib/i18n/messages.js';
	import { drawerState } from '$lib/states/drawer-state.svelte.js';
	import Button from '$shared/ui/atoms/buttons/Button.svelte';
	import CloseIcon from '$shared/ui/atoms/icons/close/Close.svelte';
	import MenuIcon from '$shared/ui/atoms/icons/menu/Menu.svelte';
	import Space from '$shared/ui/atoms/space/Space.svelte';

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
