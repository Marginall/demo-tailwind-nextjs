import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useIsActiveSection } from '../use-is-active-section';

const { mockedPathnameHook } = vi.hoisted(() => ({
	mockedPathnameHook: vi.fn(),
}));

vi.mock('@/_routing/navigation', async (importOriginal) => {
	const original: Record<string, unknown> = await importOriginal();
	return {
		...original,
		usePathname: mockedPathnameHook,
	};
});

describe('useIsActiveSection', () => {
	const TEST_CASES: {
		expected: boolean;
		pathname: string;
		params: Parameters<typeof useIsActiveSection>;
	}[] = [
		{ expected: true, pathname: '/', params: ['/'] },
		{ expected: false, pathname: '/', params: ['/faq'] },
		{ expected: true, pathname: '/faq', params: ['/'] },
		{ expected: false, pathname: '/faq', params: ['/', 'exact'] },
		{
			expected: false,
			pathname: '/services/service-a',
			params: ['/services', 'exact'],
		},
		{
			expected: true,
			pathname: '/services/service-a',
			params: ['/services', 'startsWith'],
		},
	];

	TEST_CASES.forEach(({ pathname, params, expected }) => {
		it(
			`should return \`${expected}\` for pathname "${pathname}" ` +
				`when params are ${JSON.stringify(params)}`,
			() => {
				mockedPathnameHook.mockReturnValueOnce(pathname);
				const { result } = renderHook(() =>
					useIsActiveSection(...params)
				);
				expect(result.current).toBe(expected);
			}
		);
	});

	it('should throw an error for invalid match type', () => {
		mockedPathnameHook.mockReturnValueOnce('/');
		const callHook = () => {
			renderHook(() => useIsActiveSection('/', 'invalid-matcher' as any));
		};
		expect(callHook).toThrowError();
	});
});
