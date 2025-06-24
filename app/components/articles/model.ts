import { arrayFilterNullable } from '@wezom/toolkit-array';
import { getHomePageData } from './data/get-home-page-data';
import { ArticlesModel } from './types';

export async function useArticles(): Promise<ArticlesModel> {
	const data = await getHomePageData();

	return {
		articles:
			arrayFilterNullable(data?.Categories?.data).map((category) => {
				return {
					id: category.id,
					title: category.translate.title,
					articles: arrayFilterNullable(category.articles?.data),
				};
			}) || [],
	};
}
