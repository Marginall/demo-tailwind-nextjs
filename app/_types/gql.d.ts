import type { DocumentNode, TypedDocumentNode } from '@apollo/client';

declare module '@apollo/client' {
	export function gql(literals: string | readonly string[], ...args: any[]): DocumentNode;

	export function gql<D, V = never>(literals: string | readonly string[], ...args: any[]): TypedDocumentNode<D, V>;
}

declare module 'graphql-tag' {
	export function gql(literals: string | readonly string[], ...args: any[]): DocumentNode;

	export function gql<D, V = never>(literals: string | readonly string[], ...args: any[]): TypedDocumentNode<D, V>;
}
