import { ArticleFragment } from '@/_library/graphql';

export interface ArticlesModel {
	articles: ArticleModel[];
}

type ArticleModel = {
	id: string;
	title: string;
	articles: ArticleFragment[];
};
