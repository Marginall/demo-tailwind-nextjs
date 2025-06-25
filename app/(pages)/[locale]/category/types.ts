import { CategoryFragment } from '@/_library/graphql';

export interface GetCategoryPageDataProps {
	locale: string;
	slug?: string;
}

export interface GetCategoryPageDataResponse {
	page: CategoryFragment | null;
}
