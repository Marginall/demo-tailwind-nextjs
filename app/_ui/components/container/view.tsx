import { ReactElement } from 'react';
import clsx from 'clsx';
import { UiContainerProps } from './types';

export function UiContainer({
	as: Component = 'div',
	children,
	className,
	variant = 'default',
}: UiContainerProps): ReactElement {
	return (
		<Component
			className={clsx(
				'w-full mx-auto',
				{
					'max-w-[1650px] px-4 lg:px-16': variant === 'default',
					'max-w-[1280px] px-4 lg:px-16': variant === 'medium',
					'max-w-[1920px]': variant === 'full',
					'max-w-[984px] px-4 lg:px-16': variant === 'article',
				},
				className
			)}
		>
			{children}
		</Component>
	);
}
