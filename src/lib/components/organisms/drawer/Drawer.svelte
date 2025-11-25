<script lang="ts">
	import { drawerState } from '$lib/states/drawer-state.svelte.js';
</script>

<nav
	class="bg fixed top-0 right-0 bottom-0 z-80 w-96 transform-gpu border-2 bg-l transition-transform duration-500 ease-in-out dark:bg-d {drawerState.open
		? ''
		: 'translate-x-full'}">
	<ul></ul>
</nav>
