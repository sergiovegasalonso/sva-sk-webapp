<script lang="ts">
	import { m } from '$lib/i18n/messages.js';
	import Button from '$shared/components/atoms/buttons/Button.svelte';
	import MoonIcon from '$shared/components/atoms/icons/moon/Moon.svelte';
	import SunIcon from '$shared/components/atoms/icons/sun/Sun.svelte';
	import Space from '$shared/components/atoms/space/Space.svelte';
	import { Theme } from '$shared/types/enums/theme.enum';

	let { class: className = '' } = $props();

	function toggleTheme(): void {
		const html = document.documentElement;
		html.classList.toggle(Theme.Dark);

		const htmlContainsDarkClass = html.classList.contains(Theme.Dark);
		localStorage.theme = htmlContainsDarkClass ? Theme.Dark : Theme.Light;
	}
</script>

<Button ariaLabel={m.toggle_theme()} class={className} onclick={toggleTheme}>
	<SunIcon class="hidden dark:block" />
	<MoonIcon class="block dark:hidden" />
	<div class="hidden lg:flex">
		<Space />
		<span>{m.theme()} </span>
	</div>
</Button>
