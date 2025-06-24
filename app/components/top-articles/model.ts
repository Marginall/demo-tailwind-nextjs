import { arrayFilterNullable } from '@wezom/toolkit-array';
import { getTopArticlesData } from './data/get-top-articles-data';
import { TopArticlesModel } from './types';

export async function useTopArticles(): Promise<TopArticlesModel> {
	const data = await getTopArticlesData();

	return {
		topArticlesToday: arrayFilterNullable(data?.TopArticlesToday?.data) || [],
	};
}
