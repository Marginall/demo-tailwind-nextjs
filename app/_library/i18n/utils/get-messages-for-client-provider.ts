import { getMessages } from 'next-intl/server';
import { IntlMessages } from '../types';

export const getMessagesForClientProvider = async (): Promise<{ $: IntlMessages }> => {
	const messages = await getMessages();
	const $ = ('$' in messages ? messages['$'] : {}) as IntlMessages;
	return { $ };
};
