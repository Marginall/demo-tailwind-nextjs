import { UiImage } from '@/_ui';
import { CardProps } from './types';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale/uk';
import { UiSvgIcon } from '@/_ui/components/svg/icon';
import { UiLink } from '@/_ui/components/link';
import { routeArticleSlug } from '@/(pages)/[locale]/article/[slug]/_route';

export function Card({ data }: CardProps) {
	return (
		<div className='flex gap-4 py-[25px]'>
			<UiImage
				src={data.image}
				alt={data.translate.title}
				width={80}
				height={80}
				loading={'eager'}
				classNames={{
					picture: 'flex-shrink-0 w-[80px] h-[80px]',
					img: 'h-full object-cover object-center rounded-sm overflow-hidden',
				}}
			/>
			<div className={'flex flex-col justify-between'}>
				<UiLink
					href={routeArticleSlug.buildHref({
						segments: {
							slug: data.translate.slug,
						},
					})}
					className={'text-md font-medium leading-none hover:text-[#fe4444] transition-colors duration-300'}
				>
					{data.translate.title}
				</UiLink>
				<div className={'flex items-center gap-2 mt-[8px]'}>
					<div className={'text-xs text-[#9FA4A8]'}>
						{format(new Date(data.date), 'dd MMM, HH:mm', {
							locale: uk,
							weekStartsOn: 1,
						})}
					</div>
					{data.categories.map((category) => (
						<div key={category.id} className={'flex items-center gap-1'}>
							<div className={`block w-[5px] h-[5px]`} style={{ backgroundColor: category.color }} />
							<div className={'text-xs text-[#9FA4A8]'}>{category.translate.title}</div>
						</div>
					))}
					<UiSvgIcon symbol={'video'} />
				</div>
			</div>
		</div>
	);
}
