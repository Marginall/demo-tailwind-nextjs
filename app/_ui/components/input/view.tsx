import { forwardRef } from 'react';
import { Input } from '@heroui/react';
import { cn } from 'clsx-for-tailwind';
import { UiInputProps } from './types';

export const UiInput = forwardRef<HTMLInputElement, UiInputProps>(
	({ classNames = {}, variant = 'bordered', color = 'primary', size = 'md', ...props }, ref) => {
		return (
			<Input
				{...props}
				ref={ref}
				classNames={{
					...classNames,
					label: cn(
						'after:text-inherit', // required * inherit color text
						{
							['text-base']: variant === 'bordered',
							['group-data-[filled-within=true]:top-0 group-data-[filled-within=true]:bg-white group-data-[filled-within=true]:px-1']:
								variant === 'bordered',
							['group-data-[filled-within=true]:-top-[2px]']:
								variant === 'bordered' && (size === 'sm' || size === 'lg'),
							['text-content2-foreground group-data-[focus=true]:text-primary']: color === 'primary',
							...(props.isInvalid && {
								['group-data-[focus=true]:!text-primary']: color === 'primary',
							}),
						},
						classNames?.label
					),
					input: cn(
						'!text-default text-[16px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none focus:ring-0 focus:border-transparent',
						classNames?.input
					),
					innerWrapper: cn(
						'flex flex-nowrap',
						{
							['group-data-[has-label=true]:items-center']: variant === 'bordered',
						},
						classNames?.innerWrapper
					),
					inputWrapper: cn(
						'px-4 py-2 text-white',
						'group-data-[focus=true]:!ring-1 group-data-[focus-visible=true]:!ring-1 group-data-[focus=true]:ring-primary group-data-[focus=true]:!border-primary group-data-[focus-visible=true]:!border-primary group-data-[focus-visible=true]:ring-offset-0 group-data-[focus-visible=true]:ring-primary',
						{
							['h-10 min-h-10']: size === 'sm',
							['h-12 min-h-12']: size === 'md',
							[`shadow-none border-1 group-data-[focus=true]:ring-1 group-data-[focus=true]:ring-primary group-data-[disabled=true]:border-dashed group-data-[disabled=true]:border-content2-foreground border-content4-foreground group-hover:border-default-400 group-data-[has-value]:border-content4-foreground group-hover:group-data-[has-value=true]:border-default-500`]:
								variant === 'bordered',
							['shadow-none bg-background-200 border-1 border-background-300']:
								variant === 'flat' && color === 'default',
						},
						'rounded',
						classNames?.inputWrapper
					),
					helperWrapper: cn(
						'px-[14px]',
						{
							['group-data-[focus=true]:hidden']: props.isInvalid,
						},
						classNames?.helperWrapper
					),
					description: cn('text-content2-foreground', classNames?.description),
				}}
				variant={variant}
				color={color}
				size={size}
			/>
		);
	}
);

UiInput.displayName = 'UiInput';
