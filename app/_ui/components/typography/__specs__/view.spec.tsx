import { render, screen } from '@testing-library/react';
import { UiTypography } from '../view';
import React from 'react';

describe('UiTypography', () => {
	it('renders with correct text and default variant', () => {
		render(<UiTypography>Test text</UiTypography>);
		const el = screen.getByText('Test text');
		expect(el).toBeInTheDocument();
		expect(el.tagName).toBe('DIV');
		expect(el).toHaveClass('text-[15px]', 'lg:text-[16px]', 'leading-[1.38]', 'font-normal');
	});

	it('renders as h1 with correct classes', () => {
		render(
			<UiTypography as='h1' variant='h1'>
				Heading
			</UiTypography>
		);
		const el = screen.getByText('Heading');
		expect(el.tagName).toBe('H1');
		expect(el).toHaveClass('text-[32px]', 'lg:text-[56px]', 'leading-[1.2]', 'lg:leading-none', 'font-medium');
	});

	it('applies custom className', () => {
		render(<UiTypography className='my-class'>Custom</UiTypography>);
		const el = screen.getByText('Custom');
		expect(el).toHaveClass('my-class');
	});

	it('renders as <a> with href, target, download', () => {
		render(
			<UiTypography as='a' href='/file.pdf' target='_blank' download>
				Download
			</UiTypography>
		);
		const el = screen.getByText('Download');
		expect(el.tagName).toBe('A');
		expect(el).toHaveAttribute('href', '/file.pdf');
		expect(el).toHaveAttribute('target', '_blank');
		expect(el).toHaveAttribute('download');
	});
});
