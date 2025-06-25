import { getLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReactElement } from 'react';
import { getPageData } from './_actions/get-page-data';
import { DocumentMetadata } from '@/_widgets/document-metadata';
import { UiContainer } from '@/_ui';
import { Sidebar } from '@/components/sidebar';
import { Category } from '@/components/category';

export default async function Page({ params }: { params: Promise<{ slug: string }> }): Promise<ReactElement> {
	const { slug } = await params;
	const locale = await getLocale();
	const data = await getPageData({
		locale,
		slug,
	});

	const metadata = {
		title: data.page?.translate.title,
	};

	if (data && data.page) {
		return (
			<>
				{metadata && <DocumentMetadata {...metadata} />}
				<UiContainer className={'py-5'}>
					<div className={'flex bg-white drop-shadow-[0_0_40px_rgba(0,0,0,0.05)]'}>
						<div className={'flex-grow'}>
							<Category data={data.page} />
						</div>
						<div className={'w-[409px]'}>
							<Sidebar />
						</div>
					</div>
				</UiContainer>
			</>
		);
	}

	return notFound();
}
