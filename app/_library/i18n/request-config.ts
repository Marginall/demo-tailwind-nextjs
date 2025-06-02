import { getRequestConfig } from 'next-intl/server';
import { DEFAULT_LOCALE, isLocale } from './utils/locale';

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = (await requestLocale) || '';
	locale = isLocale(locale) ? locale : DEFAULT_LOCALE;

	return {
		locale,
		now: new Date(),
		timeZone: 'Europe/Kiev',
		messages: (await import(`./messages/${locale}.json`)).default
	};
});
