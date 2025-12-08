import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Header from './Header.svelte';

const DEFAULT_CLASSES = ['flex', 'items-center', 'justify-between', 'p-4', 'lg:p-8'];

describe('/Header.svelte', () => {
	it('should render only one header element', async () => {
		const { container } = render(Header);
		const headers = container.querySelectorAll('header');
		expect(headers.length).toBe(1);
	});

	it('should render header with default classes', async () => {
		const { container } = render(Header);
		const header = container.querySelector('header');
		const classList = header?.classList;

		for (const c of DEFAULT_CLASSES) {
			expect(classList?.contains(c), `Expected class ${c} to be present`).toBe(true);
		}
	});

	it('should render Logo', async () => {
		const { container } = render(Header);
		const logo = container.querySelector('.logo');
		expect(logo).not.toBeNull();
	});

	it('should render AppOptions', async () => {
		const { container } = render(Header);
		// AppOptions renders a div with class "flex gap-4"
		const appOptions = container.querySelector('div.flex.gap-4');
		expect(appOptions).not.toBeNull();
	});
});
