<script lang="ts">
	import Space from '$lib/components/atoms/Space.svelte';
	import Bars2 from '$lib/components/atoms/icons/Bars2.svelte';
	import XMark from '$lib/components/atoms/icons/XMark.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { drawerState } from '$lib/states/drawer-state.svelte.js';
	import Button from '$root/lib/components/atoms/buttons/Button.svelte';

	let { class: className = '' } = $props();

	function toggleMenu(): void {
		drawerState.open = !drawerState.open;
	}
</script>

<Button ariaLabel={m.toggle_menu()} class={className} onclick={toggleMenu}>
	{#if drawerState.open}
		<XMark />
	{:else}
		<Bars2 />
	{/if}
	<div class="hidden lg:flex">
		<Space />
		<span>{m.menu()}</span>
	</div>
</Button>
