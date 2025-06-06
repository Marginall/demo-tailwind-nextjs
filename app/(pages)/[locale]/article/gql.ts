import { gql } from '@apollo/client';

export const ARTICLE_PAGE_FRAGMENT = gql`
	fragment NewsPageFragment on ArticleType {
		id
		special_tag {
			id
		}
		slug
		is_stored
		is_liked
		published_at
		updated_at
		total_views
		unique_views
		can_listen
		expected_reading_time
		owner {
			id
			name
			cover {
				url
			}
			roles {
				name
				translate {
					title
				}
			}
			translate {
				slug
				position
			}
			has_owned_page
		}
		authors {
			id
			name
			cover {
				url
			}
			roles {
				name
				translate {
					title
				}
			}
			translate {
				slug
				position
			}
			has_owned_page
		}
		stored_count
		liked_count
		categories {
			color
			slug
			translate {
				title
			}
		}
		tags {
			slug
			translate {
				title
			}
		}
		translate {
			title
			lead_paragraph
			content
			key_points
			seo_keywords
		}
		cover {
			alt
			url
			responsive_images_as_array {
				url
				width
			}
			caption
			original_url
			mime_type
		}
		carousel_images {
			url
			alt
			responsive_images_as_array {
				url
				width
			}
		}
		video_links {
			id
			link
			translate {
				caption
			}
			cover {
				alt
				url
				responsive_images_as_array {
					url
					width
				}
			}
		}
		similar_articles {
			...SimilarArticlesFragment
		}
		seo {
			seo_title
			seo_h1
			seo_description
		}
	}

	fragment SimilarArticlesFragment on ArticleType {
		id
		special_tag {
			id
		}
		slug
		is_stored
		is_liked
		published_at
		updated_at
		total_views
		unique_views
		stored_count
		liked_count
		translate {
			title
			lead_paragraph
			content
			key_points
		}
		can_listen
		expected_reading_time
		owner {
			id
			name
			cover {
				url
			}
			roles {
				name
				translate {
					title
				}
			}
			translate {
				slug
				position
			}
			has_owned_page
		}
		authors {
			id
			name
			cover {
				url
			}
			roles {
				name
				translate {
					title
				}
			}
			translate {
				slug
				position
			}
			has_owned_page
		}
		categories {
			color
			slug
			translate {
				title
			}
		}
		tags {
			slug
			translate {
				title
			}
		}
		cover {
			alt
			url
			responsive_images_as_array {
				url
				width
			}
			caption
		}
		carousel_images {
			url
			alt
			responsive_images_as_array {
				url
				width
			}
		}
		video_links {
			id
			link
			translate {
				caption
			}
			cover {
				alt
				url
				responsive_images_as_array {
					url
					width
				}
			}
		}
		seo {
			seo_title
			seo_h1
			seo_description
		}
	}
`;
export const ARTICLE = gql`
	query Article($slug: String!) {
		Item: Articles(slug: $slug) {
			data {
				...NewsPageFragment
			}
		}
	}
`;
