<script lang="ts">
	import ThemeButton from '$lib/components/atoms/buttons/theme-button/ThemeButton.svelte';
	import LanguageButton from '$root/lib/components/atoms/buttons/locale-button/LocaleButton.svelte';
</script>

<div class="flex gap-4">
	<LanguageButton />
	<ThemeButton />
</div>
