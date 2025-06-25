import { CategoryArticleFragment } from '@/_library/graphql';

export interface ListProps {
	slug: string;
	data: CategoryArticleFragment[] | [];
	translates: {
		loadMore: string;
		empty: string;
	};
}
