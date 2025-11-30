<script lang="ts">
	import Space from '$lib/components/atoms/Space.svelte';
	import Language from '$lib/components/atoms/icons/Language.svelte';
	import { Locale } from '$lib/domain/enums/locale.enum';
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale, setLocale } from '$lib/paraglide/runtime';
	import Button from '$root/lib/components/atoms/buttons/Button.svelte';

	let { class: className = '' } = $props();

	function getOppositeLocaleCompleteText(): string {
		return getLocale() === Locale.ES ? 'English' : 'Español';
	}

	function getOppositeLocaleReducedText(): string {
		return getLocale() === Locale.ES ? 'En' : 'Es';
	}

	function toggleLocale(): void {
		setLocale(getLocale() === Locale.ES ? Locale.EN : Locale.ES);
	}
</script>

<Button ariaLabel={m.toggle_locale()} class={className} onclick={toggleLocale}>
	<Language />
	<div class="hidden lg:flex">
		<Space />
		<span>{getOppositeLocaleCompleteText()}</span>
	</div>
	<div class="flex lg:hidden">
		<Space />
		<span>{getOppositeLocaleReducedText()}</span>
	</div>
</Button>
