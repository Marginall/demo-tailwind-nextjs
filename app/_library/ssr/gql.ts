import { gql } from '@apollo/client';
import { fragments } from './fragments';

export const GET_COMMON_DATA = gql`
	query GetCommonData($side: [String]!, $language: [String]!) {
		TranslatesSimple(place: $side, lang: $language) {
			key
			text
			lang
		}
		Categories(per_page: 50) {
			data {
				...NavCategory
			}
		}
		PagesList {
			data {
				...PagesList
			}
		}
		CurrentDomain: DomainsList(only_current: true) {
			data {
				...CurrentDomain
				setting {
					...CurrentDomainSetting
				}
				domain_social_links {
					...CurrentDomainSocials
				}
			}
		}
		# banners: BlocksList(per_page: 500) {
		# 	data {
		# 		...Banner
		# 	}
		# }
		HomePageBlock: homePageCategoryBlock {
			...HomePage
		}
		NewsColumn: newsColumn {
			...NewsColumn
		}
	}
	${fragments}
`;
