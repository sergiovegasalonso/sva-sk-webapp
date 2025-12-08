import { drawerState } from '$lib/states/drawer-state.svelte.js';
import { beforeEach, describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Drawer from './Drawer.svelte';

const DEFAULT_CLASSES = [
	'fixed',
	'top-auto',
	'right-0',
	'bottom-0',
	'left-0',
	'z-80',
	'flex',
	'h-96',
	'w-auto',
	'transform-gpu',
	'border-2',
	'bg-l',
	'transition-transform',
	'duration-500',
	'ease-in-out',
	'lg:top-0',
	'lg:left-auto',
	'lg:h-auto',
	'lg:w-96',
	'dark:bg-d'
];

const CLOSED_CLASSES = [
	'translate-x-0',
	'translate-y-full',
	'lg:translate-x-full',
	'lg:translate-y-0'
];

describe('/Drawer.svelte', () => {
	beforeEach(() => {
		drawerState.open = false;
	});

	it('should render only one nav element', async () => {
		const { container } = render(Drawer);
		const navs = container.querySelectorAll('nav');
		expect(navs.length).toBe(1);
	});

	it('should render drawer closed by default', async () => {
		const { container } = render(Drawer);
		const nav = container.querySelector('nav');
		const classList = nav?.classList;

		for (const c of DEFAULT_CLASSES) {
			expect(classList?.contains(c), `Expected class ${c} to be present`).toBe(true);
		}

		for (const c of CLOSED_CLASSES) {
			expect(classList?.contains(c), `Expected class ${c} to be present`).toBe(true);
		}
	});

	it('should render drawer open when state is open', async () => {
		drawerState.open = true;
		const { container } = render(Drawer);
		const nav = container.querySelector('nav');
		const classList = nav?.classList;

		for (const c of DEFAULT_CLASSES) {
			expect(classList?.contains(c), `Expected class ${c} to be present`).toBe(true);
		}

		for (const c of CLOSED_CLASSES) {
			expect(classList?.contains(c), `Expected class ${c} NOT to be present`).toBe(false);
		}
	});
});
