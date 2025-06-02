import messages from '@/_i18n/messages/uk.json';

type Messages = typeof messages;

declare global {
	interface IntlMessages extends Messages {}
}

export {};
