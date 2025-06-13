import { ReactElement } from 'react';
import { ArticleContentProps } from './types';
import { useArticleContent } from './model';
import { Wysiwyg } from '../wysiwyg';

export async function ArticleContent({ data }: ArticleContentProps): Promise<ReactElement> {
	const { title, body, date, similarArticles } = await useArticleContent({ data });

	return (
		<div className={'px-5 py-6'}>
			<time className={'text-sm text-gray-500'}>{date}</time>
			<h1 className={'my-5 text-4xl font-bold'}>{title}</h1>
			<Wysiwyg data={body} />
			{similarArticles.length > 0 && (
				<>
					<h2 className={'my-5 text-4xl font-bold'}>Similar Articles</h2>
					<ul className={'list-disc'}>
						{similarArticles.map((article, index) => (
							<li key={index} className={'mb-2'}>
								<time className={'text-sm text-gray-500'}>{article.date}</time>
								<h3 className={'text-xl font-medium'}>{article.title}</h3>
								<p className={'text-gray-500'}>{article.body}</p>
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
}
