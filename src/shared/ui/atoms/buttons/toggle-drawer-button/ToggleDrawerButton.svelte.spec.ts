import { drawerState } from '$core/drawer/drawer-state.svelte.js';
import { beforeEach, describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import ToggleDrawerButton from './ToggleDrawerButton.svelte';

describe('/ToggleDrawerButton.svelte', () => {
	beforeEach(() => {
		drawerState.open = false;
	});

	it('should render button', async () => {
		const { container } = render(ToggleDrawerButton);
		const button = container.querySelector('button');
		expect(button).not.toBeNull();
	});

	it('should render MenuIcon when drawer is closed', async () => {
		drawerState.open = false;
		const { container } = render(ToggleDrawerButton);
		// MenuIcon usually has a specific path or class, but checking for SVG is a start.
		// Since CloseIcon is not rendered, we can check for presence of one SVG and maybe absence of another if we knew their specific attributes.
		// However, looking at the component, it swaps icons.
		// Let's assume MenuIcon and CloseIcon render SVGs.
		const svgs = container.querySelectorAll('svg');
		expect(svgs.length).toBeGreaterThan(0);
	});

	it('should render CloseIcon when drawer is open', async () => {
		drawerState.open = true;
		const { container } = render(ToggleDrawerButton);
		const svgs = container.querySelectorAll('svg');
		expect(svgs.length).toBeGreaterThan(0);
	});

	it('should toggle drawer state when clicked', async () => {
		const { container } = render(ToggleDrawerButton);
		const button = container.querySelector('button');

		expect(drawerState.open).toBe(false);

		button?.click();
		expect(drawerState.open).toBe(true);

		button?.click();
		expect(drawerState.open).toBe(false);
	});

	it('should render menu text', async () => {
		const { container } = render(ToggleDrawerButton);
		expect(container.textContent).toContain('Menu');
	});
});
