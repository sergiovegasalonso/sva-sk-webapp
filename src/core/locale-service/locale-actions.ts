import { Locale } from '$core/locale-service/types/locale.enum';
import { getLocale, setLocale } from '$lib/i18n/runtime';

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
