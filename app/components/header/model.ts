import { LOCALES, DEFAULT_LOCALE } from '@/_library/i18n';
// import { useData } from '@/_library/ssr';
import { HeaderModel } from './types';
import { getCommonData } from '@/_library/ssr/server';
import { getLocale } from 'next-intl/server';
import { arrayFilterNullable } from '@wezom/toolkit-array';

export async function useHeader(): Promise<HeaderModel> {
	// const { navCategories, currentDomain } = useData();
	const { pathname, navCategories, currentDomain, currentDomainSetting, socials } = await getCommonData();
	const weather =
		currentDomainSetting && currentDomainSetting.weather ? JSON.parse(currentDomainSetting.weather) : null;
	const currency =
		currentDomainSetting && currentDomainSetting.currency ? JSON.parse(currentDomainSetting.currency) : null;

	const currentLocale = await getLocale();
	return {
		locales: LOCALES.map((locale) => ({
			name: locale.toUpperCase(),
			url: locale === currentLocale ? null : locale === DEFAULT_LOCALE ? pathname : `/${locale}${pathname}`,
		})),
		navCategories: navCategories ? [...navCategories].slice(0, 10) : [],
		logo:
			currentDomain && currentDomain.logo && currentDomain.logo.original_url
				? currentDomain.logo.original_url
				: '/static/logo-big.svg',
		socials: socials,
		weather: {
			icon: weather ? weather.weather[0].icon : '',
			temperature: weather ? weather.main.temp : '',
		},
		currency: {
			USD: currency.USD ? currency.USD : null,
			EUR: currency.EUR ? currency.EUR : null,
		},
		trendTags: currentDomainSetting?.in_trend_tags
			? arrayFilterNullable(currentDomainSetting.in_trend_tags).map(
					(tag: {
						slug: string;
						translate: {
							title: string;
						};
					}) => ({
						slug: tag.slug,
						translate: {
							title: tag.translate.title || '',
						},
					})
				)
			: [],
	};
}
