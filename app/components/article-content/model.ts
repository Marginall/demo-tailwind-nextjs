import { ArticleContentModel, ArticleContentProps } from './types';

export async function useArticleContent({ data }: ArticleContentProps): Promise<ArticleContentModel> {
	console.log(123, data);

	return {
		title: data.translate.title,
		body: data.translate.content,
		date: data.published_at || null,
		similarArticles: data.similar_articles
			? data.similar_articles.map((article) => ({
					title: article.translate.title,
					body: article.translate.content,
					date: article.published_at || null,
				}))
			: [],
	};
}
