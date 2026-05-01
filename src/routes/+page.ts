import { api } from '$features/blog/services/api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, fetch }) => {
	const { queryClient } = await parent();

	await queryClient.prefetchQuery({
		queryKey: ['posts', 20],
		queryFn: () => api(fetch).getPosts(10)
	});
};
