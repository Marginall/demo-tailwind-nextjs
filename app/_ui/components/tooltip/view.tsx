import { ReactElement } from 'react';
import { Tooltip } from '@heroui/react';
import clsx from 'clsx';
import { UiTooltipProps } from './types';

export function UiTooltip({
	color = 'foreground',
	classNames = {},
	children,
	slots,
	...props
}: UiTooltipProps): ReactElement {
	return (
		<Tooltip
			showArrow={true}
			closeDelay={0}
			{...props}
			color={color}
			classNames={{
				...classNames,
				base: clsx('before:bg-background-900 shadow-none', classNames.base || ''),
				content: clsx('rounded-[4px] px-2 py-1 text-[12px] bg-background-900', classNames.content || ''),
			}}
		>
			<div className={slots?.wrapper}>{children}</div>
		</Tooltip>
	);
}
