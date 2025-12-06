import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Menu from './Menu.svelte';

const DEFAULT_CLASSES = ['size-6'];

const renderButton = (props = {}) => {
	return render(Menu, {
		...props
	});
};

describe('/Menu.svelte', () => {
	it('should render only one svg element', async () => {
		const { container } = renderButton();
		const svgElements = container.querySelectorAll('svg');
		expect(svgElements.length).toBe(1);
	});

	it('should render svg with default classes', async () => {
		const { container } = renderButton();
		const svg = container.querySelector('svg');
		expect(svg?.classList.toString()).toBe(`${DEFAULT_CLASSES.join(' ')} `);
	});

	it('should render svg with default and custom classes', async () => {
		const { container } = renderButton({ class: 'z-1000' });
		const svg = container.querySelector('svg');
		expect(svg?.classList.toString()).toBe(`${DEFAULT_CLASSES.join(' ')} z-1000`);
	});
});
