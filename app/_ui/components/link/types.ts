import { LinkProps } from 'next/dist/client/link';
import { ReactNode } from 'react';

export interface UiLinkProps
	extends Omit<LinkProps, 'locale' | 'legacyBehavior'>,
		Partial<Pick<HTMLAnchorElement, 'target'>> {
	children?: ReactNode;
	className?: string;
	withLocale?: boolean;
}
