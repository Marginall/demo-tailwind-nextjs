import { render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';

vi.mock('@/_ui/components/link', () => ({
	UiLink: ({ children, ...props }: any) => <a {...props}>{children}</a>,
}));

vi.mock('@/_ui/utils/get-testid', () => ({
	getTestid: (id: string) => ({ 'data-testid': id }),
}));

vi.mock('@/_library/ssr/server', () => ({
	getCommonData: vi.fn(),
}));

import { Logo } from '../view';

describe('Logo', () => {
	beforeEach(() => {
		vi.resetAllMocks();
	});

	it('renders logo as a div on the main page (pathname "/")', async () => {
		const getCommonData = (await import('@/_library/ssr/server')).getCommonData as any;
		getCommonData.mockResolvedValue({ pathname: '/' });

		render(await Logo({ image: '/logo.png' }));

		const root = screen.getByTestId('logo');
		expect(root.tagName).toBe('DIV');
		expect(screen.getByText('Logo')).toBeInTheDocument();
		expect(root).not.toHaveAttribute('href');
	});

	it('renders logo as a link when not on the main page', async () => {
		const getCommonData = (await import('@/_library/ssr/server')).getCommonData as any;
		getCommonData.mockResolvedValue({ pathname: '/about' });

		render(await Logo({ image: '/logo.png' }));

		const root = screen.getByTestId('logo');
		expect(root.tagName).toBe('A');
		expect(root).toHaveAttribute('href', '/');
		expect(screen.getByText('Logo')).toBeInTheDocument();
	});
});
