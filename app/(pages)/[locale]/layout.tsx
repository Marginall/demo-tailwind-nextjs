/**
 * @fileOverview
 * - "global.css" always must be the first import
 */
import '@/_ui/css/globals.css';
import { UiSvgSpriteCommon } from '@/_ui/components/svg/sprite-common';
import { notFound } from 'next/navigation';
import { ReactElement } from 'react';
import { Favicons } from './_layout/favicons';
import { isLocale, transformToServer } from '@/_library/i18n';
import { getMessagesForClientProvider } from '@/_library/i18n/server';
import { getCommonData } from '@/_library/ssr/server';
import { Providers } from './providers';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const dynamic = 'force-dynamic';

export default async function RootLayout({ children, params }: LayoutProps): Promise<ReactElement> {
	const { locale } = await params;
	const commonData = await getCommonData();
	const messages = await getMessagesForClientProvider();
	throw404WithUnknownLocale(locale);

	return (
		<html className={'h-full'} lang={transformToServer(locale)}>
			<head>
				<Favicons />
			</head>
			<body className='page h-full'>
				<Providers {...commonData} locale={locale} messages={messages}>
					<div className={'flex flex-col min-h-full justify-between'}>
						<Header />
						<main className={'relative flex-grow bg-background'}>{children}</main>
						<Footer />
					</div>
				</Providers>
				<UiSvgSpriteCommon />
			</body>
		</html>
	);
}

function throw404WithUnknownLocale(locale: string) {
	if (!isLocale(locale)) notFound();
}
