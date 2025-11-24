<script lang="ts">
	import Bars2 from '$lib/components/atoms/icons/Bars2.svelte';
	import Button from '$lib/components/atoms/buttons/Button.svelte';
	import { m } from '$lib/paraglide/messages.js';

	let { class: className = '' } = $props();
</script>

<Button ariaLabel={m.toggle_menu()} class={className}>
	<Bars2 />
	<span>{m.menu()}</span>
</Button>
