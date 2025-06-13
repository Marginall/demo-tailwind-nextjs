'use server';

import { getServerApollo } from '@/_library/apollo/server';
import { ArticleQuery, ArticleQueryVariables } from '@/_library/graphql';
import { ARTICLE } from '../gql';
import { arrayGetFirstNotNullableItem } from '@wezom/toolkit-array';
import { GetArticlePageDataResponse } from '../types';

interface GetArticlePageDataProps {
	locale: string;
	slug?: string;
}

export async function getPageData({ locale, slug }: GetArticlePageDataProps): Promise<GetArticlePageDataResponse> {
	const apollo = await getServerApollo({
		url: process.env.GRAPHQL_API_SSR || '/',
		locale,
	});
	try {
		if (slug) {
			const { data, errors } = await apollo.query<ArticleQuery, ArticleQueryVariables>({
				query: ARTICLE,
				variables: {
					slug,
				},
				context: {
					fetchOptions: {
						cache: 'no-store',
					},
				},
			});

			if (errors) {
				errors.forEach((error) => {
					console.error(error);
				});
			}

			if (data.ArticlePageData && data.ArticlePageData.data && data.ArticlePageData.data.length > 0) {
				const article = arrayGetFirstNotNullableItem(data.ArticlePageData.data);
				if (article) {
					return {
						page: article,
					};
				}
			}
		} else {
			return {
				page: null,
			};
		}
	} catch (e) {
		console.error(e);
	}

	return {
		page: null,
	};
}
