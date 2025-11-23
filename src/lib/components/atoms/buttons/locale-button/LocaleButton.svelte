<script lang="ts">
	import Button from '$lib/components/atoms/buttons/Button.svelte';
	import Language from '$lib/components/atoms/icons/Language.svelte';
	import Space from '$lib/components/atoms/Space.svelte';
	import { Locale } from '$lib/domain/enums/locale.enum';
	import { getLocale, setLocale } from '$lib/paraglide/runtime';

	function getOppositeLocaleText() {
		return getLocale() === Locale.ES ? 'English' : 'Español';
	}

	function toggleLocale() {
		setLocale(getLocale() === Locale.ES ? Locale.EN : Locale.ES);
	}
</script>

<Button ariaLabel="Change language" onclick={toggleLocale}>
	<Language />
	<div class="hidden lg:flex">
		<Space />
		<span>{getOppositeLocaleText()}</span>
	</div>
</Button>
