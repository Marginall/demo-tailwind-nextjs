import { arrayFilterNullable } from '@wezom/toolkit-array';
import { getHomePageData } from './data/get-home-page-data';
import { ArticlesModel } from './types';

export async function useArticles(): Promise<ArticlesModel> {
	const data = await getHomePageData();
	return {
		topArticlesToday: arrayFilterNullable(data?.TopArticlesToday?.data) || [],
	};
}
