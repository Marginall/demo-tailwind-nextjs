'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SliderProps } from './types';
import { UiContainer, UiLink } from '@/_ui';
import { UiImage } from '@/_ui';
import { routeArticleSlug } from '@/(pages)/[locale]/article/[slug]/_route';

export function Slider({ data }: SliderProps) {
	return (
		<Swiper
			modules={[Navigation, Pagination, Autoplay]}
			spaceBetween={16}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
			// autoplay={{ delay: 5000 }}
		>
			{data.map((article) => (
				<SwiperSlide key={article.id}>
					<div className={'w-full h-[818px] relative'}>
						<UiImage
							src={article.cover?.responsive_images_as_array?.[0]?.url}
							alt={article.translate.title}
							width={1920}
							height={818}
							loading={'lazy'}
							classNames={{
								img: 'h-full object-cover object-center overflow-hidden',
							}}
						/>
						<div
							className={'absolute top-0 left-0 w-full h-full z-10'}
							style={{
								background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
                 linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 34.79%),
                 linear-gradient(180deg, rgba(46, 51, 60, 0.5) 0%, rgba(46, 51, 60, 0) 28.72%),
                 linear-gradient(0deg, #FAFAFA 0%, rgba(250, 250, 250, 0) 23.39%)`,
							}}
						></div>
						<div className={'absolute bottom-[200px] left-0 w-full z-10'}>
							<UiContainer>
								<h2 className={'text-white text-5xl'}>{article.translate.title}</h2>
								<UiLink
									className={
										'text-white text-lg mt-4 inline-block hover:text-[#fe4444] transition-colors duration-300'
									}
									href={routeArticleSlug.buildHref({
										segments: {
											slug: article.slug,
										},
									})}
								>
									Читати новину
								</UiLink>
							</UiContainer>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
