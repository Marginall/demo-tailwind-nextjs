import { getLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReactElement } from 'react';
import { getPageData } from './_actions/get-page-data';

export default async function Page({ params }: { params: Promise<{ slug: string }> }): Promise<ReactElement> {
	const { slug } = await params;
	const locale = await getLocale();
	const data = await getPageData({
		locale,
		slug,
	});
	console.log(123, data);

	if (data) {
		return <div>sdfsdfsdfsdf</div>;
	}

	return notFound();
}
