<script lang="ts">
	import { resolve } from '$app/paths';
	import { createQuery } from '@tanstack/svelte-query';
	import { api } from '../services/api';
	import type { Post } from '../types/Post';

	const { postId }: { postId: number } = $props();

	const post = createQuery<Post>(() => ({
		queryKey: ['post', postId],
		queryFn: () => api().getPostById(postId)
	}));
</script>

<div>
	<div>
		<a class="button" href={resolve('/')}> Back </a>
	</div>
	{#if !postId || post.isPending}
		<span>Loading...</span>
	{/if}
	{#if post.error}
		<span>Error: {post.error.message}</span>
	{/if}
	{#if post.isSuccess}
		<h1>{post.data.title}</h1>
		<div>
			<p>{post.data.body}</p>
		</div>
		<div>{post.isFetching ? 'Background Updating...' : ' '}</div>
	{/if}
</div>
