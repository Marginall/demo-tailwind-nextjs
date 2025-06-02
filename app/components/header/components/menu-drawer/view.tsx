'use client';
import { UiButton, UiDrawer } from '@/_ui';
import { UiSvgIcon } from '@/_ui/components/svg/icon';
import { cn } from 'clsx-for-tailwind';
import { ReactElement, useState } from 'react';

export function MenuDrawer(): ReactElement {
	const [isDrawerOpen, setisDrawerOpen] = useState(false);
	// const handleDrawerOpen = () => {
	// 	setDrawerOpen(true);
	// };
	// const handleDrawerClose = () => {
	// 	setDrawerOpen(false);
	// };
	const handleDrawerToggle = () => {
		setisDrawerOpen((prev) => !prev);
	};

	return (
		<>
			<UiButton
				variant={'light'}
				color={'default'}
				size={'md'}
				isIconOnly={true}
				className={'text-white'}
				onPress={handleDrawerToggle}
			>
				<UiSvgIcon symbol={'menu'} />
			</UiButton>
			<UiDrawer
				isOpen={isDrawerOpen}
				// onOpenChange={setIsAuthDrawerOpen}
				onClose={() => handleDrawerToggle()}
				slots={{
					header: cn(
						'shrink-0 relative gap-6 bg-transparent border-none items-center shadow-[0_4px_12px_6px_rgba(0,0,0,0.1)]',
						'md:shadow-none md:items-start md:h-60',
						'pb-0 pt-2 md:px-8 md:py-6'
					),
					body: 'overflow-visible gap-4 md:gap-6 bg-background !pb-0 pt-4 md:px-8 md:pt-6',
				}}
				// classNames={{
				// 	footer: 'justify-stretch px-4 pt-6 pb-4 md:px-8 md:pb-8',
				// }}
				headerBlock={<div>header</div>}
				footer={<div>footer</div>}
			>
				{() => (
					<>
						<div className={'w-full flex flex-col gap-4'}>Drawer</div>
					</>
				)}
			</UiDrawer>
		</>
	);
}
