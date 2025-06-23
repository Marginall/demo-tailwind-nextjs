import { gql } from '@apollo/client';

export const fragment = gql`
	fragment Article on ArticleType {
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

export const GET_HOME_PAGE_DATA = gql`
	query GetHomePageData {
		Categories(per_page: 10) {
			data {
				articles {
					data {
						...Article
					}
				}
			}
		}
		TopArticlesToday {
			data {
				...Article
			}
		}
	}
	${fragment}
`;
