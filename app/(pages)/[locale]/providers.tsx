'use client';
import { ReactElement, ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { ApolloProvider } from '@/_library/apollo/client';
import { CommonData, DataProvider } from '@/_library/ssr';
import { IntlMessages, transformToServer } from '@/_library/i18n';
import { HeroUIProvider, ToastProvider } from '@heroui/react';
import { useRouter } from '@/_routing/navigation';

export interface ProvidersProps extends CommonData {
	children: ReactNode;
	locale: string;
	messages: { $: IntlMessages };
}

export function Providers({ children, locale, messages, env, ...commonData }: ProvidersProps): ReactElement {
	const router = useRouter();
	return (
		<ApolloProvider url={env.GRAPHQL_API_CSR} locale={transformToServer(locale)}>
			<DataProvider env={env} {...commonData}>
				<NextIntlClientProvider now={new Date()} timeZone={'Europe/Kiev'} locale={locale} messages={messages}>
					<HeroUIProvider navigate={router.push} locale={transformToServer(locale)} className={'h-full'}>
						<ToastProvider />

						{children}
					</HeroUIProvider>
				</NextIntlClientProvider>
			</DataProvider>
		</ApolloProvider>
	);
}
