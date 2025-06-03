import { render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';

// Мокаем UiImage и UiLink
vi.mock('@/_ui', () => ({
	UiImage: ({ src, alt }: any) => <img data-testid='ui-image' src={src} alt={alt} />,
}));
vi.mock('@/_ui/components/link', () => ({
	UiLink: ({ children, ...props }: any) => <a {...props}>{children}</a>,
}));

// Мокаем getTestid
vi.mock('@/_ui/utils/get-testid', () => ({
	getTestid: (id: string) => ({ 'data-testid': id }),
}));

// Мокаем getCommonData и getI18n
vi.mock('@/_library/ssr/server', () => ({
	getCommonData: vi.fn(),
}));
vi.mock('@/_library/i18n/server', () => ({
	getI18n: vi.fn(),
}));

import { Logo } from '../view';

describe('Logo', () => {
	beforeEach(() => {
		vi.resetAllMocks();
	});

	it('renders logo as a div on the main page (pathname "/")', async () => {
		const getCommonData = (await import('@/_library/ssr/server')).getCommonData as any;
		const getI18n = (await import('@/_library/i18n/server')).getI18n as any;
		getCommonData.mockResolvedValue({ pathname: '/' });
		getI18n.mockResolvedValue((key: string) => (key === 'logo__text' ? 'Logo Text' : key));

		render(await Logo({ image: '/logo.png' }));

		const root = screen.getByTestId('logo');
		expect(root.tagName).toBe('DIV');
		expect(screen.getByTestId('ui-image')).toHaveAttribute('src', '/logo.png');
		expect(screen.getByText('Logo Text')).toBeInTheDocument();
		expect(root).not.toHaveAttribute('href');
	});

	it('renders logo as a link when not on the main page', async () => {
		const getCommonData = (await import('@/_library/ssr/server')).getCommonData as any;
		const getI18n = (await import('@/_library/i18n/server')).getI18n as any;
		getCommonData.mockResolvedValue({ pathname: '/about' });
		getI18n.mockResolvedValue((key: string) => (key === 'logo__text' ? 'Logo Text' : key));

		render(await Logo({ image: '/logo.png' }));

		const root = screen.getByTestId('logo');
		expect(root.tagName).toBe('A');
		expect(root).toHaveAttribute('href', '/');
		expect(screen.getByTestId('ui-image')).toHaveAttribute('src', '/logo.png');
		expect(screen.getByText('Logo Text')).toBeInTheDocument();
	});
});
