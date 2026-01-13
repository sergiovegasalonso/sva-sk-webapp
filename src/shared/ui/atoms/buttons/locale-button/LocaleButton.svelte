<script lang="ts">
	import { m } from '$lib/i18n/messages.js';
	import { getLocale, setLocale } from '$lib/i18n/runtime';
	import { Locale } from '$shared/types/enums/locale.enum';
	import Button from '$shared/ui/atoms/buttons/Button.svelte';
	import LanguageEnglishIcon from '$shared/ui/atoms/icons/language-english/LanguageEnglish.svelte';
	import LanguageSpanishIcon from '$shared/ui/atoms/icons/language-spanish/LanguageSpanish.svelte';
	import LanguageIcon from '$shared/ui/atoms/icons/language/Language.svelte';
	import Space from '$shared/ui/atoms/space/Space.svelte';

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
