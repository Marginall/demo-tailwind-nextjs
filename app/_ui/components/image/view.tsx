'use client';
import { ReactElement, useState } from 'react';
import NextImage from 'next/image';
import clsx from 'clsx';
import { UiImageProps } from './types';

export function UiImage({
	src,
	srcWebp,
	src2xWebp,
	srcSmall,
	srcSmallWebp,
	src2xSmallWebp,
	alt,
	title,
	width,
	height,
	className,
	classNames,
	loading = 'lazy',
}: UiImageProps): ReactElement {
	const [loaded, setLoaded] = useState(false);
	const defaultImage = '/static/images/no-photo.jpg';
	const isSvg = src?.endsWith('.svg');

	return (
		<picture className={clsx('block max-w-full overflow-hidden', classNames?.picture || '', className || '')}>
			{srcSmallWebp ? (
				<source
					srcSet={src2xSmallWebp ? `${srcSmallWebp} 1x, ${src2xSmallWebp} 2x` : srcSmallWebp}
					media='(max-width: 899px)'
					type='image/webp'
				/>
			) : null}
			{srcSmall ? <source srcSet={srcSmall} media='(max-width: 899px)' /> : null}
			{srcWebp ? (
				<source srcSet={src2xWebp ? `${srcWebp} 1x, ${src2xWebp} 2x` : srcWebp} type='image/webp' />
			) : null}
			<NextImage
				src={src || defaultImage}
				width={width}
				height={height}
				alt={alt || 'No image'}
				title={title || undefined}
				className={clsx(
					'block w-full h-auto transition-opacity',
					{
						'opacity-0': !isSvg && loading === 'lazy' && !loaded,
						'opacity-100': isSvg || loading !== 'lazy' || loaded,
					},
					classNames?.img || ''
				)}
				onLoad={!isSvg && loading === 'lazy' ? () => setLoaded(true) : undefined}
				loading={loading}
				unoptimized={true}
				priority={loading !== 'lazy'}
			/>
		</picture>
	);
}
