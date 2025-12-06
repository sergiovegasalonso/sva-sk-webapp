<script lang="ts">
	import Button from '$lib/components/atoms/buttons/Button.svelte';
	import LanguageEnglishIcon from '$lib/components/atoms/icons/language-english/LanguageEnglish.svelte';
	import LanguageSpanishIcon from '$lib/components/atoms/icons/language-spanish/LanguageSpanish.svelte';
	import LanguageIcon from '$lib/components/atoms/icons/language/Language.svelte';
	import Space from '$lib/components/atoms/space/Space.svelte';
	import { Locale } from '$lib/domain/enums/locale.enum';
	import { m } from '$lib/i18n/messages.js';
	import { getLocale, setLocale } from '$lib/i18n/runtime';

	let { class: className = '' } = $props();

	function getOppositeLocaleCompleteText(): string {
		return getLocale() === Locale.ES ? 'English' : 'Español';
	}

	function toggleLocale(): void {
		setLocale(getLocale() === Locale.ES ? Locale.EN : Locale.ES);
	}
</script>

<Button ariaLabel={m.toggle_locale()} class={className} onclick={toggleLocale}>
	<LanguageIcon />
	<div class="hidden lg:flex">
		<Space />
		<span>{getOppositeLocaleCompleteText()}</span>
	</div>
	<div class="flex lg:hidden">
		<Space />
		{#if getLocale() === Locale.ES}
			<LanguageEnglishIcon />
		{:else}
			<LanguageSpanishIcon />
		{/if}
	</div>
</Button>
