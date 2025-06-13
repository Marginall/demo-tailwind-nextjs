import { NewsPageFragment } from '@/_library/graphql';

export interface GetArticlePageDataResponse {
	page: NewsPageFragment | null;
}
