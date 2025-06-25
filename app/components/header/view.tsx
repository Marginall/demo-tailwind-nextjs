import { ReactElement } from 'react';
import { useHeader } from './model';
import './styles.css';
import { UiContainer } from '@/_ui';
import { getTestid } from '@/_ui/utils/get-testid';
import { Logo } from './components/logo';
import { HeaderAccount } from './components/account/view';
import { Socials } from '../social';
import { MenuDrawer } from './components/menu-drawer';
import { Menu } from './components/menu';
import { format } from 'date-fns';
import { uk } from 'date-fns/locale/uk';
import { getI18n } from '@/_library/i18n/server';
import { UiLink } from '@/_ui/components/link';
import { UiSvgIcon } from '@/_ui/components/svg/icon';
import { HeaderSearch } from './components/search/view';

export async function Header(): Promise<ReactElement> {
	const { logo, navCategories, weather, currency, trendTags, socials } = await useHeader();
	const t = await getI18n();

	return (
		<>
			<header id={'header'} {...getTestid('header')} className={'w-full bg-black/90 inline'}>
				<UiContainer className={'2xl:pr-10'}>
					<div
						{...getTestid('header-top')}
						className={'w-full flex justify-between items-center gap-[20px] py-[14px]'}
					>
						<div className={'flex justify-between items-center flex-grow'}>
							<div className={'flex justify-between items-center'}>
								<Logo image={logo} />
								<div className={'text-white pl-[40px] pr-[63px]'}>Україна</div>
							</div>
							<HeaderSearch />
						</div>
						<div className={'flex justify-end items-center w-[440px]'}>
							<div className={'flex items-center md:gap-[10px]'}>
								<Socials data={socials} />
								<HeaderAccount />
							</div>
						</div>
					</div>
					<div
						{...getTestid('header-center')}
						className={'w-full hidden 2xl:flex justify-between items-center gap-[10px] md:gap-[40px]'}
					>
						<MenuDrawer />
						<Menu data={navCategories} />
						{weather ? (
							<div className={'flex items-center text-white text-sm'}>
								<div>
									{format(new Date(), 'EEEEEE, dd MMMM', {
										locale: uk,
										weekStartsOn: 1,
									})}
								</div>
								<div className={'w-[3px] h-[3px] rounded-full bg-[#9FA4A8] mx-2'}></div>
								<div>
									{weather ? (
										<div className={'flex items-center'}>
											<img
												src={'https://openweathermap.org/img/wn/' + weather.icon + '@2x.png'}
												width={30}
												height={30}
												alt=''
											/>
											{weather.temperature === 0 && weather.temperature > 0 ? '+' : null}
											{weather.temperature === 0 && weather.temperature < 0 ? '-' : null}{' '}
											{weather.temperature}
										</div>
									) : null}
								</div>
								<div className={'w-[3px] h-[3px] rounded-full bg-[#9FA4A8] mx-2'}></div>
								{currency && currency.USD ? (
									<div className={'flex items-center'}>
										<span className={'text-[#9FA4A8] pr-1'}>$</span>
										<span>{currency.USD}</span>
									</div>
								) : null}
								{currency && currency.EUR ? (
									<>
										<div className={'w-[3px] h-[3px] rounded-full bg-[#9FA4A8] mx-2'}></div>
										<div className={'flex items-center'}>
											<span className={'text-[#9FA4A8] pr-1'}>€</span>
											<span>{currency.EUR}</span>
										</div>
									</>
								) : null}
							</div>
						) : null}
					</div>
				</UiContainer>
				<div
					{...getTestid('header-bottom')}
					className={'w-full flex justify-center items-center py-2 border-t border-b border-[#9FA4A850]'}
				>
					<UiContainer>
						<div className={'flex justify-center items-center'}>
							<span className={'text-[#9FA4A8] text-xs'}>{t('header__trands')}</span>
							{trendTags
								? trendTags.map((tag) => (
										<UiLink
											key={tag.slug}
											href={`/${tag.slug}`}
											className={
												'flex items-center text-white text-xs ml-4 gap-[5px] uppercase hover:text-[#fe4444] transition-colors duration-300'
											}
										>
											<UiSvgIcon symbol={'hot'} />
											{tag.translate.title}
										</UiLink>
									))
								: null}
						</div>
					</UiContainer>
				</div>
			</header>
		</>
	);
}
