import { gql } from '@apollo/client';

export const CATEGORY_ARTICLE_FRAGMENT = gql`
	fragment CategoryArticle on ArticleType {
		id
		slug
		translate {
			title
		}
		cover {
			responsive_images_as_array {
				url
				width
			}
		}
	}
`;

export const CATEGORY_FRAGMENT = gql`
	fragment Category on CategoryType {
		id
		slug
		translate {
			title
		}
		articles(per_page: 20) {
			data {
				...CategoryArticle
			}
		}
	}
	${CATEGORY_ARTICLE_FRAGMENT}
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
