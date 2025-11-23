<script lang="ts">
	import Button from '$lib/components/atoms/buttons/Button.svelte';
	import Moon from '$lib/components/atoms/icons/Moon.svelte';
	import Sun from '$lib/components/atoms/icons/Sun.svelte';
	import Space from '$lib/components/atoms/Space.svelte';
	import { Theme } from '$lib/domain/enums/theme.enum';

	function toggleTheme() {
		const documentElement = document.documentElement;
		documentElement.classList.toggle(Theme.Dark);

		const documentElementContainsDarkClass = documentElement.classList.contains(Theme.Dark);
		localStorage.theme = documentElementContainsDarkClass ? Theme.Dark : Theme.Light;
	}
</script>

<Button ariaLabel="Toggle theme" onclick={toggleTheme}>
	<div class="hidden dark:block">
		<Sun />
	</div>
	<div class="block dark:hidden">
		<Moon />
	</div>
	<div class="hidden lg:flex">
		<Space />
		<span>Theme</span>
	</div>
</Button>
