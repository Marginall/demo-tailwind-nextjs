import { gql } from '@apollo/client';

export const CATEGORY_FRAGMENT = gql`
	fragment Category on CategoryType {
		id
		slug
		translate {
			title
		}
	}
`;
export const CATEGORY_PAGE = gql`
	query Category($slug: String!) {
		Categories(slug: $slug) {
			data {
				...Category
			}
		}
	}
	${CATEGORY_FRAGMENT}
`;
