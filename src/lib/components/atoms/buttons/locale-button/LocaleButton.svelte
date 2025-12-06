<script lang="ts">
	import Button from '$lib/components/atoms/buttons/Button.svelte';
	import Language from '$lib/components/atoms/icons/Language.svelte';
	import LanguageSpanish from '$lib/components/atoms/icons/LanguageSpanish.svelte';
	import Space from '$lib/components/atoms/space/Space.svelte';
	import { Locale } from '$lib/domain/enums/locale.enum';
	import { m } from '$lib/i18n/messages.js';
	import { getLocale, setLocale } from '$lib/i18n/runtime';
	import LanguageEnglish from '$root/lib/components/atoms/icons/LanguageEnglish.svelte';

	let { class: className = '' } = $props();

	function getOppositeLocaleCompleteText(): string {
		return getLocale() === Locale.ES ? 'English' : 'Español';
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
		{#if getLocale() === Locale.ES}
			<LanguageEnglish />
		{:else}
			<LanguageSpanish />
		{/if}
	</div>
</Button>
