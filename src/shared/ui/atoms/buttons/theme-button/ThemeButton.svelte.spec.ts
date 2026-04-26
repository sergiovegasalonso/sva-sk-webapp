import { Theme } from '$core/theme-service/types/theme.enum';
import { beforeEach, describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import ThemeButton from './ThemeButton.svelte';

describe('/ThemeButton.svelte', () => {
	beforeEach(() => {
		const html = document.documentElement;
		html.dataset.theme = Theme.Light;
		document.documentElement.classList.remove(Theme.Dark);
		localStorage.clear();
	});

	it('should render button', async () => {
		const { container } = render(ThemeButton);
		const button = container.querySelector('button');
		expect(button).not.toBeNull();
	});

	it('should change data attribute called theme on html element when clicked', async () => {
		const { container } = render(ThemeButton);
		const button = container.querySelector('button');
		const html = document.documentElement;

		expect(html.dataset.theme).toBe(Theme.Light);

		await button?.click();

		expect(html.dataset.theme).toBe(Theme.Dark);

		await button?.click();

		expect(html.dataset.theme).toBe(Theme.Light);
	});

	it('should update localStorage when clicked', async () => {
		const { container } = render(ThemeButton);
		const button = container.querySelector('button');

		await button?.click();
		expect(localStorage.theme).toBe(Theme.Dark);

		await button?.click();
		expect(localStorage.theme).toBe(Theme.Light);
	});

	it('should render SunIcon and MoonIcon', async () => {
		const { container } = render(ThemeButton);
		const svgs = container.querySelectorAll('svg');
		// Expecting at least 2 icons (Sun and Moon)
		expect(svgs.length).toBeGreaterThanOrEqual(2);
	});
});
