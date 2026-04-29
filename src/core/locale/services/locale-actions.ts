import { getLocale, setLocale } from '$lib/i18n/runtime';
import { Locale } from '../types/locale.enum';

export function getOppositeLocaleCompleteText(): string {
	return getLocale() === Locale.ES ? 'English' : 'Español';
}

export function getOppositeLocale(): Locale {
	return getLocale() === Locale.ES ? Locale.EN : Locale.ES;
}

export function toggleLocale(): Locale {
	const nextLocale = getOppositeLocale();
	setLocale(nextLocale);
	return nextLocale;
}
