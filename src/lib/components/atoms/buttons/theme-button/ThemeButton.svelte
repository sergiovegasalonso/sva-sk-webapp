<script lang="ts">
	import Space from '$lib/components/atoms/Space.svelte';
	import Button from '$lib/components/atoms/buttons/Button.svelte';
	import Moon from '$lib/components/atoms/icons/Moon.svelte';
	import Sun from '$lib/components/atoms/icons/Sun.svelte';
	import { Theme } from '$lib/domain/enums/theme.enum';
	import { m } from '$lib/paraglide/messages.js';

	let { class: className = '' } = $props();

	function toggleTheme(): void {
		const documentElement = document.documentElement;
		documentElement.classList.toggle(Theme.Dark);

		const documentElementContainsDarkClass = documentElement.classList.contains(Theme.Dark);
		localStorage.theme = documentElementContainsDarkClass ? Theme.Dark : Theme.Light;
	}
</script>

<Button ariaLabel={m.toggle_theme()} class={className} onclick={toggleTheme}>
	<Sun class="hidden dark:block" />
	<Moon class="block dark:hidden" />
	<div class="hidden lg:flex">
		<Space />
		<span>{m.theme()} </span>
	</div>
</Button>
