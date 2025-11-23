<script lang="ts">
	import { browser } from '$app/environment';
	import Button from '$lib/components/atoms/buttons/Button.svelte';
	import Moon from '$lib/components/atoms/icons/Moon.svelte';
	import Sun from '$lib/components/atoms/icons/Sun.svelte';
	import Space from '$lib/components/atoms/Space.svelte';
	import { Theme } from '$lib/domain/enums/theme.enum';

	let isDarkThemeActive = $state(
		browser && document.documentElement.classList.contains(Theme.Dark)
	);

	function toggleTheme() {
		const documentElement = document.documentElement;
		documentElement.classList.toggle(Theme.Dark);

		const documentElementContainsDarkClass = documentElement.classList.contains(Theme.Dark);
		isDarkThemeActive = documentElementContainsDarkClass;
		localStorage.theme = documentElementContainsDarkClass ? Theme.Dark : Theme.Light;
	}
</script>

<Button ariaLabel="Toggle theme" onclick={toggleTheme}>
	{#if isDarkThemeActive}
		<Sun />
	{:else}
		<Moon />
	{/if}
	<Space />
	<span>Theme</span>
</Button>
