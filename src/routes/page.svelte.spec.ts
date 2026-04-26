import { page } from '@vitest/browser/context';
import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

vi.mock('@tanstack/svelte-query', () => ({
	useQueryClient: () => ({
		getQueryData: () => undefined
	}),
	createQuery: () => ({
		status: 'success',
		data: [
			{
				id: 1,
				title: 'Post title',
				body: 'Post body'
			}
		],
		error: null,
		isFetching: false,
		isPending: false,
		isSuccess: true
	})
}));

describe('/+page.svelte', () => {
	it('should render h1', async () => {
		render(Page);

		const heading = page.getByRole('heading', { level: 1 });
		await expect.element(heading).toBeInTheDocument();
	});
});
