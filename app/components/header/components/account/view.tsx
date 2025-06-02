import { ReactElement } from 'react';
import { UiButton } from '@/_ui';
import { getTestid } from '@/_ui/utils/get-testid';
import { UiSvgIcon } from '@/_ui/components/svg/icon';

export function HeaderAccount(): ReactElement {
	return (
		<div {...getTestid('header-account')}>
			<UiButton
				variant={'light'}
				color={'default'}
				size={'md'}
				isIconOnly={true}
				className={'text-white bg-white/20 rounded-full'}
			>
				<UiSvgIcon symbol={'person'} />
			</UiButton>
		</div>
	);
}
