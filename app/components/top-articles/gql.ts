import { gql } from '@apollo/client';

export const fragment = gql`
	fragment TopArticle on ArticleType {
		id
		special_tag {
			id
		}
		slug
		cover {
			id
			responsive_images_as_array {
				url
				width
			}
			url
			alt
		}
		translate {
			title
		}
		categories {
			id
			slug
			color
			translate {
				title
			}
		}
		published_at
	}
`;

export const GET_TOP_ARTICLES_DATA = gql`
	query GetTopArticlesData {
		TopArticlesToday {
			data {
				...TopArticle
			}
		}
	}
	${fragment}
`;
