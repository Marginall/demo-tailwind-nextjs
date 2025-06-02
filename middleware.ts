import createI18nMiddleware from 'next-intl/middleware';
import { routing } from '@/_routing/navigation';

export default createI18nMiddleware(routing);

export const config = {
	matcher: [
		'/((?!api|static|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
	],
};
