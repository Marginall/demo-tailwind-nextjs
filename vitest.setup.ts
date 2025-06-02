import * as matchers from '@testing-library/jest-dom/matchers';
import { expect, vi } from 'vitest';

expect.extend(matchers);

vi.mock('next-intl', async (importOriginal) => {
	const original: Record<string, unknown> = await importOriginal();
	return {
		...original,
		useTranslations: () => {
			return (key: string) => key;
		},
	};
});

vi.mock('next-intl/server', async (importOriginal) => {
	const original: Record<string, unknown> = await importOriginal();
	return {
		...original,
		getTranslations: async () => {
			return Promise.resolve((key: string) => key);
		},
	};
});
