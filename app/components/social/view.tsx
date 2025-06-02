import { ReactElement } from 'react';
import { UiSvgIcon } from '@/_ui/components/svg/icon';
import { getTestid } from '@/_ui/utils/get-testid';
import { SocialsData } from './types';

export function Socials({ data, withTitle }: SocialsData): ReactElement {
	return data.length ? (
		<div {...getTestid('socails')} className='flex items-center'>
			{data.map((item, i) =>
				item.social.icon ? (
					<a
						key={i}
						href={item.url}
						target={'_blank'}
						rel={'noreferrer'}
						className={`${withTitle ? 'group' : ''} flex items-center justify-center p-[10px]`}
					>
						<div
							className={`flex items-center justify-center ${withTitle ? 'w-[40px] h-[40px] mr-3 rounded-full bg-white border border-gray-300 group-hover:border-[#fe4444] transition-colors duration-300' : ''}`}
						>
							<UiSvgIcon symbol={item.social.icon as 'telegram' | 'rss' | 'facebook'} />
						</div>
						{withTitle ? (
							<span className={'text-xs group-hover:text-[#fe4444] transition-colors duration-300'}>
								{item.social.title}
							</span>
						) : null}
					</a>
				) : null
			)}
		</div>
	) : (
		<></>
	);
}
