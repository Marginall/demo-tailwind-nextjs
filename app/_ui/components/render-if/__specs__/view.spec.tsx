import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';
import { UiRenderIf } from '../view';

describe('UiRenderIf', () => {
	const negativeCases = [
		{ condition: false, shouldRender: false },
		{ condition: '', shouldRender: false },
		{ condition: NaN, shouldRender: false },
		{ condition: null, shouldRender: false },
		{ condition: undefined, shouldRender: false },
		{ condition: 0, shouldRender: false },
		{ condition: [].length, shouldRender: false },
	];

	const positiveCases = [
		{ condition: true, shouldRender: true },
		{ condition: [2].length, shouldRender: true },
	];

	[...negativeCases, ...positiveCases].forEach(
		({ condition, shouldRender }) => {
			test(`should ${shouldRender ? 'render' : 'not render'} child value with ${condition} condition`, () => {
				const testId = 'child';
				render(
					<UiRenderIf condition={condition}>
						<div data-testid={testId}>
							Lorem ipsum dolor sit amet.
						</div>
					</UiRenderIf>
				);
				const child = screen.queryByTestId(testId);
				if (shouldRender) {
					expect(child).not.toBeNull();
				} else {
					expect(child).toBeNull();
				}
			});
		}
	);
});
