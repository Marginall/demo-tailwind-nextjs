import { PageRoute } from '@/_routing';

export const routeArticleSlug = new PageRoute<{ slug: string }>({
	pathname: '/article/[slug]/',
});
