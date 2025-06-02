import { LOCALE_TRANSFORM_DATA } from './locale';

export function transformToClient(value: string): string {
	const item = LOCALE_TRANSFORM_DATA.find(({ server }) => server === value);
	if (item) {
		return item.client;
	}
	return value;
}
