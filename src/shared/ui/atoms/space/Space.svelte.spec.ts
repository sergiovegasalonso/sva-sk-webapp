import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Space from './Space.svelte';

const DEFAULT_CLASSES = ['w-2'];

const renderSpace = (props = {}) => {
	return render(Space, {
		...props
	});
};

describe('/Space.svelte', () => {
	it('should render only one div element', async () => {
		const { container } = renderSpace();
		const divs = container.querySelectorAll('div');
		expect(divs.length).toBe(1);
	});

	it('should render div with w-2 class', async () => {
		const { container } = renderSpace();
		const div = container.querySelector('div');
		expect(div?.classList.toString()).toBe(`${DEFAULT_CLASSES.join(' ')}`);
	});

	it('should render div without content', async () => {
		const { container } = renderSpace();
		const div = container.querySelector('div');
		expect(div?.textContent).toBe('');
	});
});
