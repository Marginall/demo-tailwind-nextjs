import { ReactElement } from 'react';
import { CategoryProps } from './types';
import { getData } from './_actions/get-data';
import { List } from './components/list';
import { getLocale } from 'next-intl/server';
import { getI18n } from '@/_library/i18n/server';

export async function Category({ data }: CategoryProps): Promise<ReactElement> {
	const locale = await getLocale();
	const { articles } = await getData({ locale, slug: data.slug });
	const t = await getI18n();
	const translates = {
		loadMore: t('articles__personal-news'),
		empty: t('archive__no-news'),
	};
	return (
		<div className='px-5 pt-5 pb-10'>
			<h1 className='mb-5 text-2xl font-bold'>{data.translate.title}</h1>
			<List slug={data.slug} data={articles} translates={translates} />
		</div>
	);
}
