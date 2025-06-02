import { ReactElement } from 'react';
import { HeaderLocalesProps } from './types';
import { getTestid } from '@/_ui/utils/get-testid';

export function HeaderLocales({ items }: HeaderLocalesProps): ReactElement {
	return (
		<nav {...getTestid('header-locales')}>
			lang
			{/* <ul className={'flex items-center md:gap-2'}>
				{items.map((item, index) => (
					<Fragment key={index}>
						<li className={'block'}>
							{item.url ? (
								<UiTypography
									as={'a'}
									href={item.url}
									variant={'body2'}
									className={
										'flex items-center justify-center transition-colors text-content2-foreground hover:text-default w-12 h-12 md:w-5 md:h-5 cursor-pointer'
									}
								>
									{item.name}
								</UiTypography>
							) : (
								<UiTypography
									variant={'body2'}
									className={
										'flex items-center justify-center text-default w-12 h-12 md:w-5 md:h-5'
									}
								>
									{item.name}
								</UiTypography>
							)}
						</li>
					</Fragment>
				))}
			</ul> */}
		</nav>
	);
}
