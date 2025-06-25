import { PageRoute } from '@/_routing';

export const routeCategorySlug = new PageRoute<{ slug: string }>({
	pathname: '/category/[slug]/',
});
