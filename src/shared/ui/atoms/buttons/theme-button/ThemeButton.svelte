<script lang="ts">
	import { m } from '$lib/i18n/messages.js';
	import { Theme } from '$shared/types/enums/theme.enum';
	import Button from '$shared/ui/atoms/buttons/Button.svelte';
	import MoonIcon from '$shared/ui/atoms/icons/moon/Moon.svelte';
	import SunIcon from '$shared/ui/atoms/icons/sun/Sun.svelte';
	import Space from '$shared/ui/atoms/space/Space.svelte';

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
