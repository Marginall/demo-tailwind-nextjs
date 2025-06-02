import { ReactElement } from 'react';
import { _makeSymbolId } from '../_make-symbol-id';
import { UiSvgIconProps } from './types';

export function UiSvgIcon({ symbol }: UiSvgIconProps): ReactElement {
	const href = `#` + _makeSymbolId(symbol);
	return (
		<svg aria-hidden='true' width='1em' height='1em'>
			<use href={href} />
		</svg>
	);
}
