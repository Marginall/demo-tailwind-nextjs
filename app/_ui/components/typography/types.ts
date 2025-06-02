import { HTMLAttributes, ReactNode } from 'react';
import { As } from '@heroui/react';

export interface UiTypographyProps extends HTMLAttributes<HTMLDivElement> {
	as?: As;
	children?: ReactNode;
	className?: string;
	variant?:
		| 'default'
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'subtitle1'
		| 'subtitle2'
		| 'body1'
		| 'body2'
		| 'caption'
		| 'overline'
		| 'input-text'
		| 'button-small';
	href?: string;
	target?: string;
	download?: string | boolean;
}
