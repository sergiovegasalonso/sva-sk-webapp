<script lang="ts">
	import { setLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';
	import Sun from '$lib/components/atoms/icons/Sun.svelte';
	import Moon from '$lib/components/atoms/icons/Moon.svelte';
	import XMark from '$lib/components/atoms/icons/XMark.svelte';
	import Button from '$lib/components/atoms/buttons/Button.svelte';
</script>

<svelte:head>
	<title>sva - home</title>
	<meta name="description" content="Homepage" />
</svelte:head>

<h1>{m.hello_world({ name: 'SvelteKit User' })}</h1>
<div>
	<button onclick={() => setLocale('en')}>en</button>
	<button onclick={() => setLocale('es')}>es</button>
</div>
<p>
	If you use VSCode, install the <a
		href="https://marketplace.visualstudio.com/items?itemName=inlang.vs-code-extension"
		target="_blank">Sherlock i18n extension</a
	> for a better i18n experience.
</p>
<Sun />
<Moon />
<XMark />
<Button ariaLabel="Example button">Jjejejej</Button>
