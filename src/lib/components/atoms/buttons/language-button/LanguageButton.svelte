<script lang="ts">
	import Button from '$lib/components/atoms/buttons/Button.svelte';
	import { getLocale } from '$lib/paraglide/runtime';

	getLocale();
</script>

<Button ariaLabel="Change language">
	{#if getLocale() === 'es'}
		<p>too hot!</p>
	{:else if getLocale() === 'en'}
		<p>too cold!</p>
	{:else}
		<p>just right!</p>
	{/if}
</Button>
