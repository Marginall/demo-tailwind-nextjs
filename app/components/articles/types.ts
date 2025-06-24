import { ArticleFragment } from '@/_library/graphql';

export interface ArticlesModel {
	categories: CategoryModel[];
}

type CategoryModel = {
	id: string;
	slug: string;
	title: string;
	articles: ArticleFragment[];
};
