<script lang="ts">
	let { ariaLabel, children, class: className = '', ...rest } = $props();
</script>

<button
	aria-label={ariaLabel}
	class="flex cursor-pointer items-center border-2 px-4 py-2 hover:bg-lh dark:hover:bg-dh {className}"
	{...rest}>
	{@render children()}
</button>
