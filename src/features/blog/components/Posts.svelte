<script lang="ts">
	import { resolve } from '$app/paths';
	import { createQuery, useQueryClient } from '@tanstack/svelte-query';
	import { api } from '../services/api';
	import type { Post } from '../types/Post';

	const client = useQueryClient();

	const limit = 10;

	const posts = createQuery<Post[], Error>(() => ({
		queryKey: ['posts', limit],
		queryFn: () => api().getPosts(limit)
	}));
</script>

<div>
	<div>
		{#if posts.status === 'pending'}
			<span>Loading...</span>
		{:else if posts.status === 'error'}
			<span>Error: {posts.error.message}</span>
		{:else}
			<ul>
				{#each posts.data as post (post.id)}
					<li class="w-full">
						<article>
							<a
								href={resolve(`/${post.id}`)}
								style={// We can use the queryCache here to show bold links for
								// ones that are cached
								client.getQueryData(['post', post.id])
									? 'font-weight: bold; color: indianred'
									: 'cursor: pointer'}>
								{post.title}
							</a>
						</article>
					</li>
				{/each}
			</ul>
			<pre
				class={['updating-text', posts.isFetching && 'on']}
				style="font-weight:700">Background Updating...</pre>
		{/if}
	</div>
</div>
