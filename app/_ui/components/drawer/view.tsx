import React, { ReactElement } from 'react';
import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, Spinner } from '@heroui/react';
import { UiDrawerProps } from './types';
import { UiButton } from '../button';
import { CloseSymbol } from './close';
import { UiTypography } from '../typography';
import { cn } from 'clsx-for-tailwind';

export function UiDrawer({
	children,
	title,
	footer,
	slots,
	headerBlock,
	pending,
	...props
}: UiDrawerProps): ReactElement {
	return (
		<Drawer hideCloseButton {...props}>
			<DrawerContent className='rounded-none max-w-none w-full md:w-[520px]'>
				{(onClose) => (
					<>
						{pending ? (
							<div className='absolute w-full z-[500] h-full top-0 left-0 flex items-center justify-center bg-divider'>
								<Spinner />
							</div>
						) : null}
						<DrawerHeader
							className={cn(
								'z-10 flex items-center gap-4 px-4 md:px-6 py-3 md:py-4 shadow-md md:shadow-none md:border-b-1 md:border-divider',
								slots?.header
							)}
						>
							<UiButton
								variant='light'
								isIconOnly
								onPress={onClose}
								className='text-black min-w-0 -m-1 lg:-m-2 size-8 lg:!w-12 lg:h-12'
							>
								<CloseSymbol />
							</UiButton>

							{title && (
								<UiTypography variant='h5' className='!font-semibold cursor-default'>
									{title}
								</UiTypography>
							)}

							{headerBlock}
						</DrawerHeader>
						<DrawerBody className={cn('px-4 md:px-6 py-6 md:py-4 bg-gray-100', slots?.body)}>
							{children(onClose)}
						</DrawerBody>
						{footer ? <DrawerFooter className={cn(slots?.footer)}>{footer}</DrawerFooter> : null}
					</>
				)}
			</DrawerContent>
		</Drawer>
	);
}
