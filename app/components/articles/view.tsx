import { ReactElement } from 'react';
import { useArticles } from './model';
import { Card } from './components/card';
import { routeCategorySlug } from '@/(pages)/[locale]/category/[slug]/_route';
import { UiLink } from '@/_ui';

export async function Articles(): Promise<ReactElement> {
	const { categories } = await useArticles();
	return (
		<div className={'p-5'}>
			{/* {topArticlesToday.length > 0 && <TopArticles data={topArticlesToday} />} */}
			{categories.map((block) => (
				<div key={block.id} className={'mb-10'}>
					<UiLink
						className={
							'block mb-5 text-grey font-medium hover:text-[#fe4444] transition-colors duration-300'
						}
						href={routeCategorySlug.buildHref({
							segments: {
								slug: block.slug,
							},
						})}
					>
						{block.title}
					</UiLink>
					<div className='grid 2xl:grid-rows-2 grid-cols-2 2xl:grid-cols-4 gap-5'>
						{block.articles.map((article, index) => (
							<div
								className={`
									${
										index === 0
											? '2xl:row-span-2 2xl:col-span-1 2xl:h-auto'
											: index === 5
												? '2xl:row-span-2 2xl:col-start-4 2xl:h-auto'
												: index === 1 || index === 2
													? '2xl:col-span-1 2xl:h-[225px]'
													: index === 3
														? '2xl:col-start-2 2xl:row-start-2 2xl:h-[225px]'
														: index === 4
															? '2xl:col-start-3 2xl:row-start-2 2xl:h-[225px]'
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
