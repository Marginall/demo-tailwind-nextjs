// import { DocumentMetadata } from '@/_widgets/document-metadata';
import { ReactElement } from 'react';
// import { fetchWidgets } from './_api/fetch-widgets';
import { Sidebar } from '@/components/sidebar';
import { UiContainer } from '@/_ui';
import { Articles } from '@/components/articles';
import { TopArticles } from '@/components/top-articles';

export const dynamic = 'force-dynamic';

export default async function Homepage(): Promise<ReactElement> {
	return (
		<>
			{/* {metadata && <DocumentMetadata {...metadata} />} */}
			<TopArticles />
			<UiContainer className={'py-5'}>
				<div className={'flex flex-col md:flex-row bg-white drop-shadow-[0_0_40px_rgba(0,0,0,0.05)]'}>
					<div className={'flex-grow'}>
						<Articles />
					</div>
					<Sidebar />
				</div>
			</UiContainer>
		</>
	);
}
