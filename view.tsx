'use client';
import { ReactElement } from 'react';
import { Logo } from '@/_components/logo';
import { getTestid, UiContainer, UiDivider } from '@package/ui';
import { SocialList } from '@/_components/social-list';
import { useHeader } from './model';
import './styles.css';
import { HeaderTopMenu } from './components/top-menu/view';
import { HeaderLocales } from './components/locales/view';
import { HeaderPhones } from './components/phones/view';
import { HeaderAccount } from './components/account/view';
import { HeaderCompare } from './components/compare/view';
import { HeaderCart } from './components/cart/view';
import { HeaderCatalog } from './components/catalog/view';
import { HeaderSearch } from './components/search/view';

export function Header(): ReactElement {
	const { topMenu, socials, locales, phones, catalog } = useHeader();

	return (
		<>
			<div
				id={'header'}
				{...getTestid('header-top')}
				className={'relative flex-shrink-0 w-full z-50 bg-background border-b border-solid border-divider'}
			>
				<UiContainer className={'!pr-[4px] md:!pr-4 lg:!pr-10'}>
					<div className={'h-[48px] md:h-[50px] w-full flex justify-between items-center'}>
						<div>
							<Logo variant={'header'} />
						</div>
						<div>
							<div className={'flex items-center md:gap-10'}>
								{topMenu.length ? (
									<div className={'hidden md:block'}>
										<HeaderTopMenu items={topMenu} />
									</div>
								) : null}
								{socials.length ? (
									<div className={'hidden md:block'}>
										<SocialList socials={socials} variant={'header'} />
									</div>
								) : null}
								<div>
									<HeaderLocales items={locales} />
								</div>
								<div className={'md:hidden'}>
									<div className={'flex items-center gap-1'}>
										<div>
											<HeaderPhones items={phones} isMobile />
										</div>
										<UiDivider orientation="vertical" className={'h-6'} />
										<div>
											<HeaderAccount isMobile />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</UiContainer>
			</div>
			<header
				{...getTestid('header-bottom')}
				className={'sticky top-0 flex-shrink-0 w-full z-50 bg-background shadow-[0_4px_8px_0_rgba(0,0,0,0.1)]'}
			>
				<UiContainer className={'!pr-[4px] md:!pr-4 lg:!pr-[28px]'}>
					<div className={'h-[56px] md:h-[64px] w-full flex items-center gap-3 lg:gap-6'}>
						<div className={'flex-shrink-0 hidden md:block w-[240px]'}>
							<HeaderCatalog list={catalog} />
						</div>
						<div className={'flex-grow'}>
							<HeaderSearch />
						</div>
						<div className={'flex-shrink-0'}>
							<div className={'flex items-center gap-1 md:gap-2'}>
								<div className={'hidden md:block'}>
									<HeaderPhones items={phones} />
								</div>
								<UiDivider orientation="vertical" className={'h-6 hidden md:block'} />
								<div className={'hidden md:block'}>
									<HeaderAccount />
								</div>
								<UiDivider orientation="vertical" className={'h-6 hidden md:block'} />
								<div>
									<HeaderCompare />
								</div>
								<UiDivider orientation="vertical" className={'h-6'} />
								<div>
									<HeaderCart />
								</div>
							</div>
						</div>
					</div>
				</UiContainer>
			</header>
			<nav
				id={'header-catalog-wrapper'}
				{...getTestid('header-catalog-container')}
				className={'header-catalog-wrapper pointer-events-none z-50 hidden md:block'}
			/>
		</>
	);
}
