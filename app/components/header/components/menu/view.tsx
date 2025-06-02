import React, { ReactElement } from 'react';
import { MenuProps } from './types';
import { UiLink } from '@/_ui/components/link';
import { getTestid } from '@/_ui/utils/get-testid';

export function Menu({ data }: MenuProps): ReactElement {
	return (
		<div className='menu flex items-center flex-grow'>
			{data.map((item) => (
				<div key={item.id} className='menu-item'>
					<UiLink
						href={`/${item.slug}`}
						{...getTestid('logo')}
						className='flex justify-center px-2 text-sm uppercase text-white hover:text-[#fe4444] transition-colors duration-300'
					>
						<div className={'text-secondary '}>{item.translate.title}</div>
					</UiLink>
				</div>
			))}
		</div>
	);
}
