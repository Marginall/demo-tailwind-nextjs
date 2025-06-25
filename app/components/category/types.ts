import { CategoryArticleFragment, CategoryFragment } from '@/_library/graphql';

export interface CategoryProps {
	data: CategoryFragment;
}
export interface GetCategoryDataProps {
	locale: string;
	slug?: string;
}

export interface GetCategoryDataResponse {
	articles: CategoryArticleFragment[] | [];
}
