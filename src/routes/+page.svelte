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
</div>
