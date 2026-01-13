import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import AppOptions from './AppOptions.svelte';

// Mock the child components
vi.mock('$shared/ui/atoms/buttons/locale-button/LocaleButton.svelte', async () => {
	return {
		default: (await import('./__mocks__/MockLocaleButton.svelte')).default
	};
});

vi.mock('$shared/ui/atoms/buttons/theme-button/ThemeButton.svelte', async () => {
	return {
		default: (await import('./__mocks__/MockThemeButton.svelte')).default
	};
});

const DEFAULT_CLASSES = ['flex', 'gap-4'];

const renderAppOptions = (props = {}) => {
	return render(AppOptions, {
		...props
	});
};

describe('/AppOptions.svelte', () => {
	it('should render the wrapper div and mocked children', async () => {
		const { container, getByTestId } = renderAppOptions();
		const divs = container.querySelectorAll('div');
		// Wrapper + MockLocaleButton + MockThemeButton = 3 divs
		expect(divs.length).toBe(3);

		// Check if mocks are rendered
		await expect.element(getByTestId('locale-button')).toBeInTheDocument();
		await expect.element(getByTestId('theme-button')).toBeInTheDocument();
	});

	it('should render wrapper div with default classes', async () => {
		const { container } = renderAppOptions();
		// The first div is the wrapper
		const div = container.querySelector('div');
		expect(div?.classList.toString()).toBe(DEFAULT_CLASSES.join(' '));
	});
});
