// import { DocumentMetadata } from '@/_widgets/document-metadata';
import { ReactElement } from 'react';
// import { fetchWidgets } from './_api/fetch-widgets';
import { Sidebar } from '@/components/sidebar';
import { UiContainer } from '@/_ui';

export const dynamic = 'force-dynamic';

export default async function Homepage(): Promise<ReactElement> {
	// const { metadata } = await fetchWidgets();
	return (
		<>
			{/* {metadata && <DocumentMetadata {...metadata} />} */}
			<UiContainer>
				<div className={'flex bg-white drop-shadow-[0_0_40px_rgba(0,0,0,0.05)]'}>
					<div className={'flex-grow'}>121</div>
					<div className={'w-[409px]'}>
						<Sidebar />
					</div>
				</div>
			</UiContainer>
		</>
	);
}
