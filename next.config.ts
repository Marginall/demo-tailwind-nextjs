import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		tsconfigPath: './tsconfig.nextjs.json',
	},
	async headers() {
		return Promise.resolve([
			{
				source: '/static/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=86400',
					},
				],
			},
			{
				source: '/favicon.ico',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=86400',
					},
				],
			},
		]);
	},
};

const withNextIntl = createNextIntlPlugin(
	'./app/_library/i18n/request-config.ts'
);
export default withNextIntl(nextConfig);
