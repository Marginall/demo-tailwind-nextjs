'use client';
import { ApolloClient } from '@apollo/experimental-nextjs-app-support';
import { createApollo } from './create-apollo';
import { ApolloProps } from '../types';

let CACHED_CLIENT: ApolloClient<any>;

export const getClientApollo = (props: ApolloProps): ApolloClient<any> => {
	if (!CACHED_CLIENT) {
		const client = createApollo(props);
		CACHED_CLIENT = client;
	}

	return CACHED_CLIENT;
};
