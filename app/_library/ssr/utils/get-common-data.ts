import { getServerApollo } from '@/_library/apollo/server';
import { transformToServer } from '@/_library/i18n';
import { CommonData } from '../types';
import { GET_COMMON_DATA } from '../gql';
import { arrayFilterNullable } from '@wezom/toolkit-array';
import { GetCommonDataQuery, GetCommonDataQueryVariables } from '@/_library/graphql';
import { getLocale } from 'next-intl/server';
import { headers } from 'next/headers';

export async function getCommonData(): Promise<CommonData> {
	const locale = await getLocale();
	const headersList = headers();
	const pathname = (await headersList).get('x-invoke-path') || '';
	const commonData: CommonData = {
		env: {
			GRAPHQL_API_CSR: process.env.GRAPHQL_API_CSR || '/',
			APP_URL: process.env.APP_URL || '/',
		},
		pathname,
		translations: {},
		navCategories: [],
		currentDomain: null,
		currentDomainSetting: null,
		pagesList: [],
		// homePage: null,
		newsColumn: [],
		socials: [],
	};

	const apollo = await getServerApollo({
		url: process.env.GRAPHQL_API_SSR || '/',
		locale,
	});

	try {
		const { data } = await apollo.query<GetCommonDataQuery, GetCommonDataQueryVariables>({
			query: GET_COMMON_DATA,
			variables: {
				side: ['site'],
				language: [transformToServer(locale)],
			},
			fetchPolicy: 'cache-first',
		});

		if (data) {
			commonData.translations = arrayFilterNullable(data.TranslatesSimple).reduce<Record<string, string>>(
				(acc, item) => {
					acc[item.key] = item.text || item.key;
					return acc;
				},
				{}
			);
			commonData.navCategories = arrayFilterNullable(data.Categories?.data);
			commonData.currentDomain = arrayFilterNullable(data.CurrentDomain?.data)[0] || null;
			commonData.currentDomainSetting = data.CurrentDomain?.data?.[0]?.setting ?? null;
			commonData.pagesList = arrayFilterNullable(data.PagesList?.data);
			// commonData.homePage = data.HomePageBlock;
			commonData.newsColumn = arrayFilterNullable(data.NewsColumn);
			commonData.socials = arrayFilterNullable(data.CurrentDomain?.data?.[0]?.domain_social_links);
		}
	} catch (error) {
		console.error(error);
	}

	return commonData;
}
