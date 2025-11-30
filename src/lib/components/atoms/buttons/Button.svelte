<script lang="ts">
	let { ariaLabel, children, class: className = '', ...rest } = $props();
</script>

<button
	aria-label={ariaLabel}
	class="flex cursor-pointer items-center border-2 bg-l px-4 py-2 hover:bg-lh focus:bg-lh dark:bg-d dark:hover:bg-dh dark:focus:bg-dh {className}"
	{...rest}>
	{@render children()}
</button>
