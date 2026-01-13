import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './Page.svelte';

const DEFAULT_CLASSES = ['flex-1', 'p-4', 'lg:p-8'];

const renderPage = (props = {}) => {
	return render(Page, {
		children: () => 'Child content',
		...props
	});
};

describe('/Page.svelte', () => {
	it('should render only one main element', async () => {
		const { container } = renderPage();
		const mains = container.querySelectorAll('main');
		expect(mains.length).toBe(1);
	});

	it('should render main with default classes', async () => {
		const { container } = renderPage();
		const main = container.querySelector('main');
		expect(main?.classList.toString()).toBe(DEFAULT_CLASSES.join(' '));
	});

	it('should render main without content', async () => {
		const { container } = renderPage();
		const main = container.querySelector('main');
		expect(main?.textContent).toBe('');
	});
});
