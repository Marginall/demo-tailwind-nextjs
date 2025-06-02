import { LOCALE_TRANSFORM_DATA } from './locale';

export function transformToServer(value: string): string {
	const item = LOCALE_TRANSFORM_DATA.find(({ client }) => client === value);
	if (item) {
		return item.server;
	}
	return value;
}
