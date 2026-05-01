<script lang="ts">
	import Posts from '$features/blog/components/Posts.svelte';
	import HomeMainView from '$features/home/views/Main.svelte';
</script>

<svelte:head>
	<title>sva - home</title>
	<meta name="description" content="Homepage" />
</svelte:head>

<HomeMainView />
<div class="w-full">
	<Posts />
</div>
