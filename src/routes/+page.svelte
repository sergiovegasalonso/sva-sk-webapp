<script lang="ts">
	import HomeMainView from '$features/home/views/Main.svelte';
	import Posts from '$shared/ui/refactor/Posts.svelte';
</script>

<svelte:head>
	<title>sva - home</title>
	<meta name="description" content="Homepage" />
</svelte:head>

<HomeMainView />
<div class="w-full">
	<Posts />
</div>
