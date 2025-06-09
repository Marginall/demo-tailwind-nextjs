'use client';
import { ReactElement, useEffect, useMemo, useRef } from 'react';
import { cn } from 'clsx-for-tailwind';
import parse from 'html-react-parser';
import './styles.css';
import { getTestid } from '@/_ui/utils/get-testid';

interface WysiwygProps {
	data?: string | null;
	className?: string;
}

export function Wysiwyg({ data, className }: WysiwygProps): ReactElement {
	const ref = useRef<HTMLDivElement>(null);

	const widgetCodes = useMemo(() => {
		if (!data || typeof window === 'undefined') return [];

		const parser = new DOMParser();
		const doc = parser.parseFromString(data, 'text/html');
		return Array.from(doc.querySelectorAll<HTMLDivElement>('.widget-placeholder[data-code]'))
			.map((el) => el.getAttribute('data-code')!)
			.filter(Boolean);
	}, [data]);

	useEffect(() => {
		if (widgetCodes.length === 0) return;
		if (typeof window === 'undefined') return;
	}, [widgetCodes]);

	return (
		<div {...getTestid('wysiwyg')} className={cn('wysiwyg break-words', className)}>
			<div ref={ref}>
				{parse(
					(data || '')
						.replace(/<img([^>]*)loading="lazy"/g, `<img$1`)
						.replace(/<img/g, `<img loading="lazy"`)
						.replace(
							/<oembed url="https:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^"&]+)"><\/oembed>/g,
							(match, videoId) => {
								const iframeUrl = `https://www.youtube.com/embed/${videoId}`;
								return `<iframe
											src="${iframeUrl}"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowfullscreen
											style="width: 100%; height: 480px;">
										</iframe>`;
							}
						)
				)}
			</div>
		</div>
	);
}
