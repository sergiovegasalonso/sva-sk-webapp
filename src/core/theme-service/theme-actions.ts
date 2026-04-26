import { Theme } from '$core/theme-service/types/theme.enum';

export function applyLightTheme(): void {
	const html = document.documentElement;
	html.dataset.theme = Theme.Light;
	localStorage.theme = Theme.Light;
}

export function applyDarkTheme(): void {
	const html = document.documentElement;
	html.dataset.theme = Theme.Dark;
	localStorage.theme = Theme.Dark;
}

export function toggleTheme(): void {
	const html = document.documentElement;

	if (html.dataset.theme === Theme.Light) {
		applyDarkTheme();
	} else {
		applyLightTheme();
	}
}
