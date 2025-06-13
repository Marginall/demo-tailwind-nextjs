import { forwardRef } from 'react';
import { Button } from '@heroui/react';
import clsx from 'clsx';
import { UiButtonProps } from './types';
import { cn } from 'clsx-for-tailwind';

export const UiButton = forwardRef<HTMLButtonElement, UiButtonProps>(
	(
		{
			as = 'button',
			children,
			className,
			variant = 'solid',
			color = 'primary',
			size = 'md',
			isIconOnly,
			href,
			target,
			download,
			classNames = {},
			...props
		},
		ref
	) => {
		return (
			<Button
				disableRipple={variant === 'light' && !isIconOnly}
				{...props}
				as={as}
				domRef={ref}
				className={cn(
					'flex items-center justify-center color-white text-white hover:text-[#fe4444] transition-all duration-300',
					{
						'rounded-3xl bg-black text-sm uppercase font-medium border border-color-black hover:bg-[#ffffff] hover:text-[#000]':
							variant === 'solid',
					},
					classNames?.base || '',
					className || '',
					!props.disabled && 'cursor-pointer'
				)}
				variant={variant}
				color={color}
				size={size}
				isIconOnly={isIconOnly}
				{...(href && as === 'a' ? { href } : {})}
				{...(target && as === 'a' ? { target } : {})}
				{...(download && as === 'a' ? { download } : {})}
			>
				{!isIconOnly ? (
					<span
						className={clsx(
							'block px-2',
							{
								'!px-0 hover:underline': variant === 'light',
							},
							classNames?.content || ''
						)}
					>
						{children}
					</span>
				) : (
					children
				)}
			</Button>
		);
	}
);

UiButton.displayName = 'UiButton';
