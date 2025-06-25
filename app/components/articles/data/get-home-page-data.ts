import { getServerApollo } from '@/_library/apollo/server';
import { getLocale } from 'next-intl/server';
import { GET_HOME_PAGE_DATA } from '../gql';
import { GetHomePageDataQuery, GetHomePageDataQueryVariables } from '@/_library/graphql';

export const getHomePageData = async () => {
	const locale = await getLocale();
	const apollo = await getServerApollo({
		url: process.env.GRAPHQL_API_SSR || '/',
		locale,
	});

	try {
		const { data } = await apollo.query<GetHomePageDataQuery, GetHomePageDataQueryVariables>({
			query: GET_HOME_PAGE_DATA,
			fetchPolicy: 'cache-first',
		});
		return data;
	} catch (error) {
		console.error('Error fetching home page data:', error);
	}
	return null;
};
