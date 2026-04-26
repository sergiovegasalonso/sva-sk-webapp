<script lang="ts">
	let { ariaLabel, children, class: className = '', ...rest } = $props();
</script>

<button aria-label={ariaLabel} class="btn {className}" {...rest}>
	{@render children()}
</button>
