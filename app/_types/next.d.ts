import { type Locale } from '@/_i18n/locale';
import { type PropsWithChildren } from 'react';

declare global {
	interface LayoutProps<P extends {} = {}> extends PropsWithChildren {
		params: Awaitable<{ locale: Locale } & P>;
	}
}
