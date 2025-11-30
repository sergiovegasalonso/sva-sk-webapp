import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './Page.svelte';

describe('/Page.svelte', () => {
	it('should render only one main element', async () => {
		const { container } = render(Page, {
			children: () => 'Child content'
		});
		const mains = container.querySelectorAll('main');
		expect(mains.length).toBe(1);
	});

	it('should render main with flex-1, p-4 and lg:p-8 classes', async () => {
		const { container } = render(Page, {
			children: () => 'Child content'
		});
		const main = container.querySelector('main');
		expect(main?.classList.toString()).toBe('flex-1 p-4 lg:p-8');
	});

	it('should render main without content', async () => {
		const { container } = render(Page, {
			children: () => 'Child content'
		});
		const main = container.querySelector('main');
		expect(main?.textContent).toBe('');
	});
});
