<script lang="ts">
	import { toggleTheme } from '$core/theme/services/theme-actions';
	import { m } from '$lib/i18n/messages.js';
	import Button from '$shared/ui/atoms/buttons/Button.svelte';
	import MoonIcon from '$shared/ui/atoms/icons/moon/Moon.svelte';
	import SunIcon from '$shared/ui/atoms/icons/sun/Sun.svelte';
	import Space from '$shared/ui/atoms/space/Space.svelte';

	let { class: className = '' } = $props();
</script>

<Button ariaLabel={m.toggle_theme()} class={className} onclick={toggleTheme}>
	<SunIcon class="hidden dark:block" />
	<MoonIcon class="block dark:hidden" />
	<div class="hidden lg:flex">
		<Space />
		<span>{m.theme()} </span>
	</div>
</Button>
