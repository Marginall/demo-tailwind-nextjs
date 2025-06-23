import { getServerApollo } from '@/_library/apollo/server';
import { GetTopArticlesDataQuery, GetTopArticlesDataQueryVariables } from '@/_library/graphql';
import { getLocale } from 'next-intl/server';
import { GET_TOP_ARTICLES_DATA } from '../gql';

export const getTopArticlesData = async () => {
	const locale = await getLocale();
	const apollo = await getServerApollo({
		url: process.env.GRAPHQL_API_SSR || '/',
		locale,
	});

	try {
		const { data } = await apollo.query<GetTopArticlesDataQuery, GetTopArticlesDataQueryVariables>({
			query: GET_TOP_ARTICLES_DATA,
			fetchPolicy: 'cache-first',
		});
		return data;
	} catch (error) {
		console.error('Error fetching top articles data:', error);
	}
	return null;
};
