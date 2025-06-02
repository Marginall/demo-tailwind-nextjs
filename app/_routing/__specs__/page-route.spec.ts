import { describe, expect, it } from 'vitest';
import { PageRoute } from '../page-route';

describe('PageRoute', () => {
	describe('makeUrl', () => {
		it('should return the same value as the pathname unless it consists of a dynamic patterns', () => {
			const route = new PageRoute({
				pathname: '/section/child',
			});
			expect(route.buildHref()).toBe('/section/child');
		});

		it('should return the replaced value for the pathname with the dynamic patterns', () => {
			const route = new PageRoute<{ id: string }>({
				pathname: '/section/[id]/id',
			});
			expect(
				route.buildHref({
					segments: { id: '123' },
				})
			).toBe('/section/123/id');
		});

		it('should return the pathname with the get params', () => {
			const route = new PageRoute<
				null,
				{ key?: string; numbers?: number[] }
			>({
				pathname: '/section/child',
			});
			const path = route.buildHref({
				params: {
					key: 'value',
					numbers: [1, 2],
				},
			});
			expect(path).toBe('/section/child?key=value&numbers=1&numbers=2');
		});

		it('should return the replaced value for the pathname with the get params', () => {
			const route = new PageRoute<
				{ id: string },
				{ price?: number; onlyAvailable?: boolean }
			>({
				pathname: '/section/[id]/id',
			});
			expect(
				route.buildHref({
					segments: { id: '123' },
					params: {
						price: 100,
						onlyAvailable: true,
					},
				})
			).toBe('/section/123/id?price=100&onlyAvailable=true');
		});

		it('should not fall with TS error on creating path without params, even if corresponding generic type is defined', () => {
			const route = new PageRoute<
				null,
				{ key?: string; numbers?: number[] }
			>({
				pathname: '/section/child',
			});
			const path = route.buildHref();
			expect(path).toBe('/section/child');
		});

		it('should return path with hash', () => {
			const route = new PageRoute<null, {}, ['foo', 'baz']>({
				pathname: '/section/child',
			});
			expect(route.buildHref({ hash: 'baz' })).toBe('/section/child#baz');
		});
	});

	describe('isAllowed', () => {
		it('should return false if `disabled: true` is passed', () => {
			const route = new PageRoute({
				pathname: '/section/child',
			});
			expect(route.isAllowed).toBe(true);
		});
	});
});
