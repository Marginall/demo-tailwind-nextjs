import { ReactNode } from 'react';

export interface ApolloProviderProps {
	children?: ReactNode;
	url: string;
	locale: string;
	xForwardedFor?: string | null;
}
