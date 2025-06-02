import { ReactElement } from 'react';
import { DocumentMetadataProps } from './types';

export function DocumentMetadata({ title, description, keywords }: DocumentMetadataProps): ReactElement {
	return (
		<>
			{!!title && <title>{title}</title>}
			{!!description && <meta name='description' content={description} />}
			{!!keywords && keywords.length > 0 && <meta name='keywords' content={keywords.join(',')} />}
		</>
	);
}
