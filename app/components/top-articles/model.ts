import { arrayFilterNullable } from '@wezom/toolkit-array';
import { getTopArticlesData } from './data/get-top-articles-data';
import { TopArticlesModel } from './types';

export async function useTopArticles(): Promise<TopArticlesModel> {
	const data = await getTopArticlesData();
	console.log(222, data);

	return {
		topArticlesToday: arrayFilterNullable(data?.TopArticlesToday?.data) || [],
	};
}
