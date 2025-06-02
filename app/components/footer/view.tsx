import { ReactElement } from 'react';
import { useFooter } from './model';
import { getTestid } from '@/_ui/utils/get-testid';
import { UiContainer } from '@/_ui/components/container';
import { Socials } from '../social';
import { UiLink } from '@/_ui/components/link';

export async function Footer(): Promise<ReactElement> {
	const { navCategories, socials } = await useFooter();

	return (
		<div id={'footer'} {...getTestid('footer')} className={'w-full mt-5'}>
			<UiContainer>
				<div className={''}>
					<div className={'flex items-start pt-2 pb-2 border-t border-b border-gray-300'}>
						<div className={'flex flex-wrap w-2/3 pt-4 pb-4 gap-4'}>
							{navCategories.map((category) => (
								<UiLink
									href={`/${category.slug}`}
									key={category.id}
									className={'flex items-center gap-2'}
								>
									<div
										className={`block w-[5px] h-[5px]`}
										style={{ backgroundColor: category.color }}
									></div>
									<div className={'text-sm hover:text-[#fe4444] transition-colors duration-300'}>
										{category.translate.title}
									</div>
								</UiLink>
							))}
						</div>
						<div className={'w-1/3 flex items-center justify-end'}>
							<Socials data={socials} withTitle />
						</div>
					</div>
				</div>
			</UiContainer>
		</div>
	);
}
