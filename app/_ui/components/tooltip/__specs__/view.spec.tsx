import { render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';

// Мокаем Tooltip из @heroui/react
vi.mock('@heroui/react', () => {
	return {
		Tooltip: ({ children, classNames = {}, ...props }: any) => (
			<div data-testid='mock-tooltip' className={classNames.base} {...props}>
				{children}
			</div>
		),
	};
});

import { UiTooltip } from '../view';

describe('UiTooltip', () => {
	it('renders children inside Tooltip and passes classNames', () => {
		render(
			<UiTooltip classNames={{ base: 'my-base', content: 'my-content' }}>
				<span>Tooltip content</span>
			</UiTooltip>
		);
		const tooltip = screen.getByTestId('mock-tooltip');
		expect(tooltip).toBeInTheDocument();
		expect(tooltip).toHaveClass('my-base');
		expect(screen.getByText('Tooltip content')).toBeInTheDocument();
	});
});
