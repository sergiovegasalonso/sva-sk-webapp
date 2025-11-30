<script lang="ts">
	let { children } = $props();
</script>

<main class="flex-1 p-4 lg:p-8">
	{@render children()}
</main>
