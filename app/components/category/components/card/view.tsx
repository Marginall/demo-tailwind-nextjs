import { UiImage } from '@/_ui';
import { CardProps } from './types';
import { UiLink } from '@/_ui/components/link';
import { routeArticleSlug } from '@/(pages)/[locale]/article/[slug]/_route';

export function Card({ data }: CardProps) {
	return (
		<UiLink
			href={routeArticleSlug.buildHref({
				segments: {
					slug: data.slug,
				},
			})}
			className='block p-3 relative w-full h-full'
		>
			<UiImage
				src={data.cover?.responsive_images_as_array?.[0]?.url}
				alt={data.translate.title}
				width={80}
				height={80}
				loading={'eager'}
				classNames={{
					picture: 'flex-shrink-0 absolute top-0 left-0 w-full h-full line-clamp-2',
					img: 'h-full object-cover object-center rounded-sm overflow-hidden',
				}}
			/>
			<div className={'flex flex-col justify-between absolute bottom-[10px] left-[10px] z-3'}>
				<h3
					className={
						'mt-3 text-md text-white font-medium hover:text-[#fe4444] transition-colors duration-300 line-clamp-2'
					}
				>
					{data.translate.title}
				</h3>
			</div>
			<div
				className={'absolute top-0 left-0 w-full h-full z-2'}
				style={{
					background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                 linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 34.79%),
                 linear-gradient(180deg, rgba(46, 51, 60, 0.5) 0%, rgba(46, 51, 60, 0) 28.72%),
                 linear-gradient(0deg, #FAFAFA 0%, rgba(250, 250, 250, 0) 23.39%)`,
				}}
			></div>
		</UiLink>
	);
}
