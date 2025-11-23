<script lang="ts">
	import Button from '$lib/components/atoms/buttons/Button.svelte';
	import Moon from '$lib/components/atoms/icons/Moon.svelte';
	import Sun from '$lib/components/atoms/icons/Sun.svelte';
	import Space from '$lib/components/atoms/Space.svelte';
	import { Theme } from '$lib/domain/enums/theme.enum';

	function toggleTheme() {
		document.documentElement.classList.toggle(Theme.Dark);
		localStorage.theme = document.documentElement.classList.contains(Theme.Dark)
			? Theme.Dark
			: Theme.Light;
	}
</script>

<Button ariaLabel="Change language" onclick={toggleTheme}>
	<Sun />
	<Moon />
	<Space />
	Theme
</Button>
