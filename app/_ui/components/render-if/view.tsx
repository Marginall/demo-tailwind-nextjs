import { ReactNode } from 'react';
import { UiRenderIfProps } from './types';

export function UiRenderIf({
	condition,
	children,
}: UiRenderIfProps): ReactNode {
	return condition ? children : null;
}
