import { ReactElement } from 'react';
import { useSidebar } from './model';
import { getI18n } from '@/_library/i18n/server';
import { List } from './components/list';

export async function Sidebar(): Promise<ReactElement> {
	const { newsColumn } = await useSidebar();
	const t = await getI18n();

	return (
		<div className='w-[409px] border-l border-gray-300'>
			<h3 className='text-lg font-medium py-6 px-5 border-b border-gray-300'>{t('on-page-sidebar__title')}</h3>
			<List data={newsColumn} translate={t('page-news-list__button-more-news')} />
		</div>
	);
}
