import * as runtime from '$lib/i18n/runtime';
import { Locale } from '$shared/types/enums/locale.enum';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import LocaleButton from './LocaleButton.svelte';

// Mock the runtime module
vi.mock('$lib/i18n/runtime', async (importOriginal) => {
	const actual = await importOriginal();
	return {
		...actual,
		getLocale: vi.fn(),
		setLocale: vi.fn()
	};
});

describe('/LocaleButton.svelte', () => {
	beforeEach(() => {
		vi.resetAllMocks();
		// Default to English
		vi.mocked(runtime.getLocale).mockReturnValue(Locale.EN);
	});

	it('should render button', async () => {
		const { container } = render(LocaleButton);
		const button = container.querySelector('button');
		expect(button).not.toBeNull();
	});

	it('should render correct text for English locale', async () => {
		vi.mocked(runtime.getLocale).mockReturnValue(Locale.EN);
		const { container } = render(LocaleButton);
		// Should show "Español" because it shows the opposite locale
		expect(container.textContent).toContain('Español');
	});

	it('should render correct text for Spanish locale', async () => {
		vi.mocked(runtime.getLocale).mockReturnValue(Locale.ES);
		const { container } = render(LocaleButton);
		// Should show "English" because it shows the opposite locale
		expect(container.textContent).toContain('English');
	});

	it('should call setLocale with opposite locale when clicked (EN -> ES)', async () => {
		vi.mocked(runtime.getLocale).mockReturnValue(Locale.EN);
		const { container } = render(LocaleButton);
		const button = container.querySelector('button');

		await button?.click();

		expect(runtime.setLocale).toHaveBeenCalledWith(Locale.ES);
	});

	it('should call setLocale with opposite locale when clicked (ES -> EN)', async () => {
		vi.mocked(runtime.getLocale).mockReturnValue(Locale.ES);
		const { container } = render(LocaleButton);
		const button = container.querySelector('button');

		await button?.click();

		expect(runtime.setLocale).toHaveBeenCalledWith(Locale.EN);
	});
});
