import { ApolloLink } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/experimental-nextjs-app-support';
import { getErrorLink } from '../links/error-link';
import { getUploadLink } from '../links/upload-link';
import { ApolloProps } from '../types';

export const createApollo = (props: ApolloProps): ApolloClient<any> => {
	const errorLink = getErrorLink();
	const uploadLink = getUploadLink(props);

	const link = ApolloLink.from([errorLink, uploadLink]);

	return new ApolloClient({
		cache: new InMemoryCache(),
		link,
		defaultOptions: {
			query: {
				errorPolicy: 'all',
			},
			mutate: {
				fetchPolicy: 'no-cache',
			},
		},
	});
};
