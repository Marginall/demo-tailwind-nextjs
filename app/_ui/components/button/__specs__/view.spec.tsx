import { render, screen } from '@testing-library/react';
import { UiButton } from '../view';
import React from 'react';

describe('UiButton', () => {
	it('renders text inside the button', () => {
		render(<UiButton>Click me</UiButton>);
		expect(screen.getByText('Click me')).toBeInTheDocument();
	});

	it('renders as <a> with href when as="a"', () => {
		render(
			<UiButton as='a' href='https://example.com'>
				Link
			</UiButton>
		);
		const button = screen.getByRole('button');
		expect(button).toHaveAttribute('href', 'https://example.com');
	});

	it('adds a custom class', () => {
		render(<UiButton className='my-class'>Test</UiButton>);
		expect(screen.getByRole('button')).toHaveClass('my-class');
	});

	it('renders only children if isIconOnly', () => {
		render(<UiButton isIconOnly>icon</UiButton>);
		// In this case, children are not wrapped in a <span>
		expect(screen.getByText('icon').tagName).not.toBe('SPAN');
	});

	it('adds target if as="a" and target is specified', () => {
		render(
			<UiButton as='a' href='https://example.com' target='_blank'>
				Link
			</UiButton>
		);
		const button = screen.getByRole('button');
		expect(button).toHaveAttribute('target', '_blank');
	});

	it('adds download if as="a" and download is specified', () => {
		render(
			<UiButton as='a' href='/file.pdf' download>
				Download
			</UiButton>
		);
		const button = screen.getByRole('button');
		expect(button).toHaveAttribute('download');
	});

	it('adds disabled if disabled', () => {
		render(<UiButton disabled>Disabled</UiButton>);
		expect(screen.getByRole('button')).toBeDisabled();
	});

	it('applies hover:underline class for light variant', () => {
		render(<UiButton variant='light'>Light</UiButton>);
		const span = screen.getByText('Light');
		expect(span).toHaveClass('hover:underline');
	});
});
