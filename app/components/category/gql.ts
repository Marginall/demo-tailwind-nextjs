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

export const CATEGORY_ARTICLES = gql`
	query CategoryArticles($slug: String!, $page: Int!) {
		Articles(page: $page, per_page: 20, category_slug: $slug) {
			data {
				...CategoryArticle
			}
		}
	}
	${CATEGORY_ARTICLE_FRAGMENT}
`;
