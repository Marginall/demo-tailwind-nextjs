import { gql } from '@apollo/client';
export const fragments = gql`
	fragment PagesList on Page {
		slug
		translate {
			title
		}
	}

	fragment CurrentDomainSocials on DomainSocialLinkType {
		social {
			title
			icon
		}
		url
	}

	fragment CurrentDomain on PublicDomainType {
		url
		id
		name
		logo {
			url
			original_url
		}
		black_logo {
			url
			original_url
		}
		footer_logo {
			url
			original_url
		}
	}

	fragment CurrentDomainSetting on DomainSettingType {
		id
		weather
		currency
		contacts_email
		contacts_phone
		advert_phone
		translate {
			contacts_title
			advert_title
			seo_h1
			seo_description
			seo_title
			video_seo_h1
			video_seo_title
			video_seo_description
			articles_seo_h1
			articles_seo_title
			articles_seo_description
			address
			main_redactor
		}
		top_tag {
			slug
			translate {
				title
			}
		}
		in_trend_tags {
			slug
			translate {
				title
			}
		}
	}

	fragment NavCategory on CategoryType {
		id
		slug
		color
		domain {
			id
		}
		translate {
			title
		}
		parent {
			id
			slug
		}
		subCategories {
			slug
			translate {
				title
			}
		}
	}

	fragment NewsColumn on ArticleCardType {
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
		carousel_images_count
		video_links_count
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

	fragment HomePage on HomePageCategoryBlockType {
		categories {
			slug
			translate {
				title
				language
			}
			id
			popular_tags {
				id
				translate {
					title
					language
				}
				slug
			}
			color
		}
		articles {
			slug
			translate {
				language
				title
			}
			id
			special_tag {
				id
			}
			categories {
				id
				slug
				color
				translate {
					title
				}
			}
			cover {
				id
				responsive_images_as_array {
					url
					width
				}
				url
				alt
			}
			is_stored
			video_links_count
			video_links {
				id
				link
				cover {
					responsive_images_as_array {
						url
						width
					}
				}
			}
			carousel_images_count
			created_at
			published_at
		}
	}
`;
