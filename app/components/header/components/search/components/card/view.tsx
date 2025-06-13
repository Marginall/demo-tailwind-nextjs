import { routeArticleSlug } from '@/(pages)/[locale]/article/[slug]/_route';
import { CardProps } from './types';
import { UiLink } from '@/_ui/components/link';

export function Card({ data }: CardProps) {
	return (
		<UiLink
			href={routeArticleSlug.buildHref({
				segments: {
					slug: data.slug,
				},
			})}
			className={
				'flex p-2 border text-white border-gray-200 rounded-lg hover:text-[#fe4444] transition-colors duration-200'
			}
		>
			{data.translate.title}
		</UiLink>
	);
}
