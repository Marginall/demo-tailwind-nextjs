'use server';

import { getServerApollo } from '@/_library/apollo/server';
import { CategoryArticlesQuery, CategoryArticlesQueryVariables } from '@/_library/graphql';
import { arrayFilterNullable } from '@wezom/toolkit-array';
import { CATEGORY_ARTICLES } from '../gql';
import { GetCategoryDataProps, GetCategoryDataResponse } from '../types';

export async function getData({ locale, slug }: GetCategoryDataProps): Promise<GetCategoryDataResponse> {
	const apollo = await getServerApollo({
		url: process.env.GRAPHQL_API_SSR || '/',
		locale,
	});
	try {
		if (slug) {
			const { data, errors } = await apollo.query<CategoryArticlesQuery, CategoryArticlesQueryVariables>({
				query: CATEGORY_ARTICLES,
				variables: {
					slug,
					page: 1,
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

			if (data.Articles && data.Articles.data && data.Articles.data.length > 0) {
				const articles = arrayFilterNullable(data.Articles.data);
				if (articles) {
					return {
						articles,
					};
				}
			}
		} else {
			return {
				articles: [],
			};
		}
	} catch (e) {
		console.error(e);
	}

	return {
		articles: [],
	};
}
