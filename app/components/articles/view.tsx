import { ReactElement } from 'react';
import { useArticles } from './model';
import { Card } from './components/card';

export async function Articles(): Promise<ReactElement> {
	const { articles } = await useArticles();
	return (
		<div className={'p-5'}>
			{/* {topArticlesToday.length > 0 && <TopArticles data={topArticlesToday} />} */}
			{articles.map((block) => (
				<div key={block.id} className={'mb-10'}>
					<div className={'mb-5 text-grey font-medium hover:text-[#fe4444] transition-colors duration-300'}>
						{block.title}
					</div>
					<div className='grid grid-rows-2 grid-cols-4 gap-5'>
						{block.articles.map((article, index) => (
							<div
								className={`
									${
										index === 0
											? 'row-span-2 col-span-1'
											: index === 5
												? 'row-span-2 col-start-4'
												: index === 1 || index === 2
													? 'col-span-1 h-[225px]'
													: index === 3
														? 'col-start-2 row-start-2 h-[225px]'
														: index === 4
															? 'col-start-3 row-start-2 h-[225px]'
															: ''
									}
								border border-gray-200 rounded-[3px]`}
								key={article.id}
							>
								<Card data={article} />
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
