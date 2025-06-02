import { _normalizeMetadata } from './_normalize-metadata';
import { Widgets } from './types';

export async function fetchWidgets(): Promise<Widgets> {
	try {
		return Promise.resolve({
			metadata: _normalizeMetadata(null),
		});
	} catch (error) {
		console.log(error);
		return {};
	}
}
