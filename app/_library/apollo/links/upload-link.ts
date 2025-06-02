import { ApolloLink } from '@apollo/client';
import { transformToServer } from '@/_library/i18n';
import { ApolloProps } from '../types';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

export function getUploadLink({ url, locale, xForwardedFor }: ApolloProps): ApolloLink {
	return createUploadLink({
		uri: url,
		fetch,
		headers: {
			'Accept-Language': transformToServer(locale),
			...(xForwardedFor ? { 'X-Forwarded-For': xForwardedFor } : {}),
		},
	});
}
