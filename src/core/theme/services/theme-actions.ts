import { Theme } from '../types/theme.enum';
import { themeState } from './theme-state.svelte';

function getCurrentThemeFromDom(): string {
	if (typeof document === 'undefined') {
		return themeState.current;
	}

	return document.documentElement.classList.contains(Theme.Dark) ? Theme.Dark : Theme.Light;
}

export function applyTheme(nextTheme: string): void {
	if (typeof document === 'undefined') {
		themeState.current = nextTheme;
		return;
	}

	const html = document.documentElement;
	html.classList.toggle(Theme.Dark, nextTheme === Theme.Dark);
	localStorage.theme = nextTheme;
	themeState.current = nextTheme;
}

export function toggleTheme(): string {
	const current = getCurrentThemeFromDom();
	const nextTheme = current === Theme.Dark ? Theme.Light : Theme.Dark;
	applyTheme(nextTheme);
	return nextTheme;
}
