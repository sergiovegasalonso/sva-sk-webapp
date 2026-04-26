<script lang="ts">
	import Home from '$features/home/presentation/pages/Home.svelte';
	import SpainMap from '$features/spain-elections/presentation/components/spain-map/SpainMap.svelte';
	import Posts from '$root/shared/ui/refactor/Posts.svelte';
</script>

<svelte:head>
	<title>sva - home</title>
	<meta name="description" content="Homepage" />
</svelte:head>

<Home />
<div class="w-full">
	<SpainMap />
	<Posts />
</div>
