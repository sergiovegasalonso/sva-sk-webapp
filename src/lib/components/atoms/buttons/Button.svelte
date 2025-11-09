<script lang="ts">
	let { ariaLabel = '', children } = $props();
</script>

<button
	class="flex cursor-pointer items-center border-2 px-4 py-2 hover:bg-lh dark:hover:bg-dh"
	aria-label={ariaLabel}
>
	{@render children()}
</button>
