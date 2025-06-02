export type Locale = 'ua' | 'ru';

export const LOCALES: Readonly<Locale[]> = ['ua', 'ru'];
export const DEFAULT_LOCALE: Readonly<Locale> = 'ru';

export const LOCALE_TRANSFORM_DATA = [
	{
		server: 'uk',
		client: 'ua',
	},
];

export function isLocale(locale: string): locale is Locale {
	const locales: Readonly<string[]> = LOCALES;
	return locales.includes(locale);
}
