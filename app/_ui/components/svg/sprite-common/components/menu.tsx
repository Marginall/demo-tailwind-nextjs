import { ReactElement } from 'react';
import { _makeSymbolId } from '../../_make-symbol-id';
import { CommonSymbol } from '../types';

export function MenuSymbol(): ReactElement {
	const makeId = (symbol: CommonSymbol) => _makeSymbolId(symbol);
	return (
		<symbol id={makeId('menu')} viewBox='0 0 17 9'>
			<rect y='6' width='12' height='3' fill='currentColor' />
			<rect width='17' height='3' fill='currentColor' />
		</symbol>
	);
}
