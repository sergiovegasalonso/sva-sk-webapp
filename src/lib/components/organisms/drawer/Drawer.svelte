<script lang="ts">
	import { drawerState } from '$lib/states/drawer-state.svelte.js';
</script>

<nav
	class="fixed w-96 top-0 bottom-0 right-0 bg z-80 bg-l dark:bg-d border-2 transform-gpu transition-transform duration-500 ease-in-out {drawerState.open
		? ''
		: 'translate-x-full'}">
	<ul></ul>
</nav>
