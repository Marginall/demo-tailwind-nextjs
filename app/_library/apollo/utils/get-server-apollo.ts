import { ApolloClient, registerApolloClient } from '@apollo/experimental-nextjs-app-support';
import { createApollo } from './create-apollo';
import { ApolloProps } from '../types';
import { headers } from 'next/headers';

export async function getServerApollo(props: ApolloProps): Promise<ApolloClient<any>> {
	const headersList = await headers();
	let xForwardedFor = headersList.get('x-forwarded-for');

	if (Array.isArray(xForwardedFor) && xForwardedFor[0]) {
		xForwardedFor = xForwardedFor[0];
	}

	const { getClient } = registerApolloClient(() => {
		return createApollo({ ...props, xForwardedFor });
	});

	return getClient();
}
