import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Space from './Space.svelte';

describe('/Space.svelte', () => {
	it('should render only one div element', async () => {
		const { container } = render(Space);
		const divs = container.querySelectorAll('div');
		expect(divs.length).toBe(1);
	});

	it('should render div with w-2 class', async () => {
		const { container } = render(Space);
		const div = container.querySelector('div');
		expect(div?.classList.contains('w-2')).toBe(true);
	});

	it('should render div without content', async () => {
		const { container } = render(Space);
		const div = container.querySelector('div');
		expect(div?.textContent).toBe('');
	});
});
