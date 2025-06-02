import { ReactElement } from 'react';
import { UiImage } from '@/_ui';
import { UiLink } from '@/_ui/components/link';
import { getTestid } from '@/_ui/utils/get-testid';
import { getCommonData } from '@/_library/ssr/server';
import { getI18n } from '@/_library/i18n/server';
import { LogoProps } from './types';

export async function Logo({ image }: LogoProps): Promise<ReactElement> {
	const { pathname } = await getCommonData();
	const t = await getI18n();

	return pathname === '/' ? (
		<div className={'flex align-center gap-[20px] no-underline'}>
			<UiImage src={image} alt={t('logo__text')} width={118} height={53} loading={'eager'} />
			<span className={'text-xs text-lh line-clamp-2 leading-none text-white tracking-[-2%]'}>
				{t('logo__text')}
			</span>
		</div>
	) : (
		<UiLink href={'/'} {...getTestid('logo')} className='d-block max-w-[257px]'>
			<div className={'flex items-center gap-[20px]'}>
				<UiImage src={image} alt={t('logo__text')} width={118} height={53} loading={'eager'} />
				<span className={'text-xs text-lh line-clamp-2 leading-none text-white tracking-[-2%]'}>
					{t('logo__text')}
				</span>
			</div>
		</UiLink>
	);
}
