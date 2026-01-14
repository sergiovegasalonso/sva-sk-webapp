<script lang="ts">
	import { drawerState } from '$core/drawer/drawer-state.svelte.js';
</script>

<nav
	class="fixed top-auto right-0 bottom-0 left-0 z-80 flex h-96 w-auto transform-gpu border-2 bg-l transition-transform
	       duration-500 ease-in-out lg:top-0 lg:left-auto lg:h-auto lg:w-96 dark:bg-d
		   {!drawerState.open
		? 'translate-x-0 translate-y-full lg:translate-x-full lg:translate-y-0'
		: ''}">
	<ul></ul>
</nav>
