import { ReactElement } from 'react';
import { _makeSymbolId } from '../../_make-symbol-id';
import { CommonSymbol } from '../types';

export function TelegramSymbol(): ReactElement {
	const makeId = (symbol: CommonSymbol) => _makeSymbolId(symbol);
	return (
		<symbol id={makeId('telegram')} viewBox='0 0 16 16'>
			<path
				d='M16 1.98987L13.4694 14.7487C13.4694 14.7487 13.1156 15.6334 12.1422 15.2087L6.27617 10.719C7.06461 10.0103 13.1812 4.51114 13.4487 4.26177C13.8622 3.87583 13.6056 3.64614 13.125 3.93801L4.09021 9.67556L0.604557 8.50212C0.604557 8.50212 0.0558025 8.30743 0.00298959 7.88274C-0.0501359 7.45804 0.62237 7.22804 0.62237 7.22804L14.8322 1.65362C14.8322 1.65362 16 1.14049 16 1.98987Z'
				fill='#23B7EC'
			/>
		</symbol>
	);
}
