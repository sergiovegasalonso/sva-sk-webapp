<script lang="ts">
	import Space from '$lib/components/atoms/Space.svelte';
	import Button from '$lib/components/atoms/buttons/Button.svelte';
	import Bars2 from '$lib/components/atoms/icons/Bars2.svelte';
	import { m } from '$lib/paraglide/messages.js';
	import { drawerState } from '$lib/states/drawer-state.svelte.js';

	let { class: className = '' } = $props();

	function toggleMenu(): void {
		drawerState.open = !drawerState.open;
	}
</script>

<Button ariaLabel={m.toggle_menu()} class={className} onclick={toggleMenu}>
	<Bars2 />
	<div class="hidden lg:flex">
		<Space />
		<span>{m.menu()}</span>
	</div>
</Button>
