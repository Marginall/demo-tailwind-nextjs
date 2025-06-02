import { forwardRef, ReactElement } from 'react';
import { cn } from 'clsx-for-tailwind';
import { UiTypographyProps } from './types';

export const UiTypography = forwardRef<HTMLDivElement, UiTypographyProps>(
	(
		{ as: Component = 'div', children, className, variant = 'body1', href, target, download, ...props },
		ref
	): ReactElement => {
		return (
			<Component
				{...props}
				ref={ref}
				className={cn(
					{
						'text-[32px] lg:text-[56px] leading-[1.2] lg:leading-none font-medium': variant === 'h1',
						'text-[24px] lg:text-[40px] leading-[1.38] font-normal': variant === 'h2',
						'text-[22px] lg:text-[32px] leading-[1.2] lg:leading-none font-semibold lg:tracking-[0.25px]':
							variant === 'h3',
						'text-[20px] lg:text-[24px] leading-[1.2] lg:leading-[1.33] font-semibold tracking-[0.25] lg:tracking-normal':
							variant === 'h4',
						'text-[18px] lg:text-[20px] leading-[1.33] font-semibold lg:font-normal': variant === 'h5',
						'text-[17px] lg:text-[18px] leading-[1.38] lg:leading-[1.335] font-semibold': variant === 'h6',
						'text-[16px] leading-[1.75] font-normal tracking-[0.15px]': variant === 'subtitle1',
						'text-[14px] leading-[1.4] font-normal': variant === 'subtitle2',
						'text-[15px] lg:text-[16px] leading-[1.38] font-normal': variant === 'body1',
						'text-[13px] lg:text-[14px] leading-[1.4] font-normal': variant === 'body2',
						'text-[12px] leading-[1.3] font-normal': variant === 'caption',
						'text-[12px] leading-[2.66] font-normal tracking-[1px]': variant === 'overline',
						'text-[16px] leading-[1.5] font-normal tracking-[0.15px]': variant === 'input-text',
						'text-[12px] leading-[1.5] font-medium tracking-[0.5px]': variant === 'button-small',
					},
					className
				)}
				{...(href && Component === 'a' ? { href } : {})}
				{...(target && Component === 'a' ? { target } : {})}
				{...(download && Component === 'a' ? { download } : {})}
			>
				{children}
			</Component>
		);
	}
);

UiTypography.displayName = 'UiTypography';
