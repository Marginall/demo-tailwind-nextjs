import { ReactElement } from 'react';

export function Favicons(): ReactElement {
	const dev = process.env.DEV_FAVICONS === 'true';
	const faviconIco = dev ? '/static/favicons/favicon.dev.ico' : '/favicon.ico';
	const faviconSvg = dev ? '/static/favicons/favicon.dev.svg' : '/static/favicons/favicon.svg';
	return (
		<>
			<link rel='icon' type='image/png' href='/static/favicons/favicon-96x96.png' sizes='96x96' />
			<link rel='icon' type='image/svg+xml' href={faviconSvg} />
			<link rel='shortcut icon' href={faviconIco} />
			<link rel='apple-touch-icon' sizes='180x180' href='/static/favicons/apple-touch-icon.png' />
			<meta name='apple-mobile-web-app-title' content='CorreggioNET' />
			<link rel='manifest' href='/static/favicons/site.webmanifest' />
		</>
	);
}
