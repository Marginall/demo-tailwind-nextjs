import { PageRoute } from '@/_library/routing';

export const routeBlogSlug = new PageRoute<{ slug: string }>({
	pathname: '/blog/[slug]/',
});
