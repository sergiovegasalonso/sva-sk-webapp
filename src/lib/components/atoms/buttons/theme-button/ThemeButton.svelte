<script lang="ts">
	import Button from '$lib/components/atoms/buttons/Button.svelte';
	import Moon from '$lib/components/atoms/icons/Moon.svelte';
	import Sun from '$lib/components/atoms/icons/Sun.svelte';
	import Space from '$lib/components/atoms/space/Space.svelte';
	import { Theme } from '$lib/domain/enums/theme.enum';
	import { m } from '$lib/paraglide/messages.js';

	let { class: className = '' } = $props();

	function toggleTheme(): void {
		const html = document.documentElement;
		html.classList.toggle(Theme.Dark);

		const htmlContainsDarkClass = html.classList.contains(Theme.Dark);
		localStorage.theme = htmlContainsDarkClass ? Theme.Dark : Theme.Light;
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
