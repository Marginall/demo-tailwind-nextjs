import { render, screen } from '@testing-library/react';
import { UiImage } from '../view';
import React from 'react';
import { vi } from 'vitest';

vi.mock('next/image', () => ({
	__esModule: true,
	default: (props: any) => {
		return <img {...props} />;
	},
}));

describe('UiImage', () => {
	it('renders image with correct src and alt, and applies className to <picture>', () => {
		render(<UiImage src='/test.jpg' alt='Test image' width={100} height={50} className='custom-class' />);
		const img = screen.getByRole('img');
		expect(img).toHaveAttribute('src', '/test.jpg');
		expect(img).toHaveAttribute('alt', 'Test image');
		expect(img).toHaveClass('block', 'w-full', 'h-auto', 'transition-opacity', 'opacity-0');
		const picture = document.querySelector('picture');
		expect(picture).toHaveClass('custom-class');
	});

	it('renders default image if src is not provided', () => {
		render(<UiImage width={100} height={50} />);
		const img = screen.getByRole('img');
		expect(img).toHaveAttribute('src', '/static/no-image.svg');
	});

	it('renders <source> tags for webp and small images', () => {
		render(
			<UiImage
				src='/test.jpg'
				srcWebp='/test.webp'
				src2xWebp='/test@2x.webp'
				srcSmall='/test-small.jpg'
				srcSmallWebp='/test-small.webp'
				src2xSmallWebp='/test-small@2x.webp'
				width={100}
				height={50}
			/>
		);
		expect(document.querySelector('source[type="image/webp"][media="(max-width: 899px)"]')).toHaveAttribute(
			'srcset',
			'/test-small.webp 1x, /test-small@2x.webp 2x'
		);
		expect(document.querySelector('source[media="(max-width: 899px)"]:not([type])')).toHaveAttribute(
			'srcset',
			'/test-small.jpg'
		);
		expect(document.querySelector('source[type="image/webp"]:not([media])')).toHaveAttribute(
			'srcset',
			'/test.webp 1x, /test@2x.webp 2x'
		);
	});
});
