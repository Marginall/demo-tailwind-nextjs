'use client';
import { ReactElement } from 'react';
import { CategoryProps } from './types';
import { arrayFilterNullable } from '@wezom/toolkit-array';
import { Card } from './components/card';

export function Category({ data }: CategoryProps): ReactElement {
	const articles = arrayFilterNullable(data.articles?.data);

	return (
		<div className='p-5'>
			<h1 className='mb-5 text-2xl font-bold'>{data.translate.title}</h1>
			<div className='grid grid-cols-4 gap-5'>
				{articles && articles.length > 0
					? articles.map((article, index) => (
							<div className={`h-[300px] border border-gray-200 rounded-[3px]`} key={article.id}>
								<Card data={article} />
							</div>
						))
					: null}
			</div>
		</div>
	);
}
