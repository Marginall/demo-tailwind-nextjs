import { forwardRef } from 'react';
import { useLocale } from 'next-intl';
import { DEFAULT_LOCALE } from '@/_library/i18n';
import { UiLinkProps } from './types';
import { Link } from '@/_routing/navigation';

export const UiLink = forwardRef<HTMLAnchorElement, UiLinkProps>(
	({ href, as, passHref, withLocale, ...props }, ref) => {
		const currentLocale = useLocale();
		const locale = currentLocale === DEFAULT_LOCALE ? '' : `/${currentLocale}`;
		const currentHref = !withLocale ? `${locale}${href.toString()}` : href;
		const currentAs = !withLocale ? (as ? `${locale}${as.toString()}` : undefined) : as;

		return (
			<Link
				{...props}
				ref={ref}
				href={currentHref}
				{...(currentAs ? { as: currentAs } : {})}
				{...(passHref ? { passHref: true, legacyBehavior: true } : {})}
			/>
		);
	}
);

UiLink.displayName = 'UiLink';
