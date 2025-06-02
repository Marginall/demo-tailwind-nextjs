/// <reference types="jest" />

import { type TestingLibraryMatchers } from '@testing-library/jest-dom/matchers';

declare global {
	namespace jest {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		interface Matchers<R = void, T = {}>
			extends TestingLibraryMatchers<ReturnType<typeof expect.stringContaining>, R> {}
	}
}
