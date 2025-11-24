<script lang="ts">
	import Bars2 from '$lib/components/atoms/icons/Bars2.svelte';
	import Button from '$lib/components/atoms/buttons/Button.svelte';
	import Space from '$lib/components/atoms/Space.svelte';
	import { m } from '$lib/paraglide/messages.js';

	let { class: className = '' } = $props();
</script>

<Button ariaLabel={m.toggle_menu()} class={className}>
	<Bars2 />
	<div class="hidden lg:flex">
		<Space />
		<span>{m.menu()}</span>
	</div>
</Button>
