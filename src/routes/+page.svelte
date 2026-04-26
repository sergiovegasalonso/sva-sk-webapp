<script lang="ts">
	import Home from '$features/home/presentation/pages/Home.svelte';
	import SpainMap from '$features/spain-elections/presentation/components/spain-map/SpainMap.svelte';
</script>

<svelte:head>
	<title>sva - home</title>
	<meta name="description" content="Homepage" />
</svelte:head>

<Home />
<div class="size-100">
	<SpainMap />
	<button class="btn btn-neutral">Neutral</button>
	<button class="btn btn-primary">Primary</button>
	<button class="btn btn-secondary">Secondary</button>
	<button class="btn btn-accent">Accent</button>
	<button class="btn btn-info">Info</button>
	<button class="btn btn-success">Success</button>
	<button class="btn btn-warning">Warning</button>
	<button class="btn btn-error">Error</button>
</div>
