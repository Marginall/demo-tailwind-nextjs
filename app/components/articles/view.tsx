import { ReactElement } from 'react';
import { useArticles } from './model';

export async function Articles(): Promise<ReactElement> {
	const { topArticlesToday } = await useArticles();
	return (
		<div>
			{/* {topArticlesToday.length > 0 && <TopArticles data={topArticlesToday} />} */}
			{topArticlesToday.map((article) => (
				<div key={article.id}>ddd</div>
			))}
		</div>
	);
}
