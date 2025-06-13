import { NewsPageFragment } from '@/_library/graphql';

export interface ArticleContentProps {
	data: NewsPageFragment;
}

export interface ArticleContentModelProps {
	data: NewsPageFragment;
}

export interface ArticleContentModel {
	title: string;
	body: string;
	date: string | null;
	similarArticles: {
		title: string;
		body: string;
		date: string | null;
	}[];
}
