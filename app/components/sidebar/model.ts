import { getCommonData } from '@/_library/ssr/server';
import { arrayFilterNullable } from '@wezom/toolkit-array';
import { SidebarModel } from './types';

export async function useSidebar(): Promise<SidebarModel> {
	const { newsColumn } = await getCommonData();

	return {
		newsColumn: arrayFilterNullable(newsColumn).map((record) => ({
			id: record.id,
			date: record.published_at ?? '',
			categories: arrayFilterNullable(record.categories).map((category) => {
				return {
					id: category.id,
					slug: category.slug,
					color: category.color,
					translate: {
						title: category.translate.title,
					},
				};
			}),
			translate: {
				title: record.translate.title,
				slug: record.slug,
			},
			image: record.cover?.responsive_images_as_array[4]?.url ?? '',
			hasVideo: Boolean(record.video_links_count),
		})),
	};
}
