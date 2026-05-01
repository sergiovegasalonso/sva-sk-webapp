<script lang="ts">
	import Post from '$features/blog/components/Post.svelte';

	const { data } = $props();
</script>

<Post postId={data.postId} />
