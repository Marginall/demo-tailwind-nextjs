import { ReactNode } from 'react';
import { LinkProps } from 'next/link';

export interface UiLinkProps
	extends Omit<LinkProps, 'locale' | 'legacyBehavior'>,
		Partial<Pick<HTMLAnchorElement, 'target'>> {
	children?: ReactNode;
	className?: string;
	withLocale?: boolean;
}
