<script lang="ts">
	import Button from '$lib/components/atoms/buttons/Button.svelte';
	import Language from '$lib/components/atoms/icons/Language.svelte';
	import Space from '$lib/components/atoms/Space.svelte';
	import { Locale } from '$lib/domain/enums/locale.enum';
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale, setLocale } from '$lib/paraglide/runtime';

	function getOppositeLocaleCompleteText() {
		return getLocale() === Locale.ES ? 'English' : 'Español';
	}

	function getOppositeLocaleReducedText() {
		return getLocale() === Locale.ES ? 'En' : 'Es';
	}

	function toggleLocale() {
		setLocale(getLocale() === Locale.ES ? Locale.EN : Locale.ES);
	}
</script>

<Button ariaLabel={m.toggle_locale()} onclick={toggleLocale}>
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
