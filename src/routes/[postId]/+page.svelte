<script lang="ts">
	import Post from '$shared/ui/refactor/Post.svelte';

	const { data } = $props();
</script>

<Post postId={data.postId} />
