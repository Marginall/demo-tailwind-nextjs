'use server';

import { getServerApollo } from '@/_library/apollo/server';
import { CategoryQuery, CategoryQueryVariables } from '@/_library/graphql';
import { arrayGetFirstNotNullableItem } from '@wezom/toolkit-array';
import { GetCategoryPageDataProps, GetCategoryPageDataResponse } from '../types';
import { CATEGORY_PAGE } from '../gql';

export async function getPageData({ locale, slug }: GetCategoryPageDataProps): Promise<GetCategoryPageDataResponse> {
	const apollo = await getServerApollo({
		url: process.env.GRAPHQL_API_SSR || '/',
		locale,
	});
	try {
		if (slug) {
			const { data, errors } = await apollo.query<CategoryQuery, CategoryQueryVariables>({
				query: CATEGORY_PAGE,
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

			if (data.Categories && data.Categories.data && data.Categories.data.length > 0) {
				const category = arrayGetFirstNotNullableItem(data.Categories.data);
				if (category) {
					return {
						page: category,
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
