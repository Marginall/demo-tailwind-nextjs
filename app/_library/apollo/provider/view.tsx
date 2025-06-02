'use client';
import { ReactElement } from 'react';
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support';
import { getClientApollo } from '../utils/get-client-apollo';
import { ApolloProviderProps } from './types';

export function ApolloProvider({ children, url, locale }: ApolloProviderProps): ReactElement {
	const makeClient = getClientApollo({
		url,
		locale,
	});

	return <ApolloNextAppProvider makeClient={() => makeClient}>{children}</ApolloNextAppProvider>;
}
