'use server';

import { getServerApollo } from '@/_library/apollo/server';
import { ArticleQuery, ArticleQueryVariables, NewsPageFragmentFragment } from '@/_library/graphql';
import { ARTICLE } from '../gql';

interface GetArticlePageDataProps {
	locale: string;
	slug?: string;
}

export interface GetArticlePageDataResponse {
	page: NewsPageFragmentFragment | null;
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
			console.log(222, data);

			if (errors) {
				errors.forEach((error) => {
					console.error(error);
				});
			}
			console.log(123, data);

			// if (data.Articles.data && data.Articles.data.length > 0) {
			// 	const item = arrayGetFirstNotNullableItem(data.Articles.data);
			// 	if (item) {
			// 		return {
			// 			page: {
			// 				data: item,
			// 			},
			// 		};
			// 	}
			// }
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
