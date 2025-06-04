import { gql } from '@apollo/client';

export const SEARCH_QUERY = gql`
	query Search($query: String!) {
		items: Articles(query: $query, sort: "published_at-desc") {
			data {
				id
				slug
				translate {
					title
				}
			}
		}
	}
`;
