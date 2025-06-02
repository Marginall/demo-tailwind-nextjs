import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';

import { CSS_VAR_FONT_BASE, CSS_VAR_FONT_HEADING } from '../constants';

const fontBase = localFont({
	src: './gilroy-medium.woff2',
	display: 'swap',
	variable: '--font-base',
} satisfies Font<typeof localFont, typeof CSS_VAR_FONT_BASE>);

const fontHeading = Montserrat({
	weight: ['700'],
	subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext'],
	display: 'swap',
	variable: '--font-heading',
} satisfies Font<typeof Montserrat, typeof CSS_VAR_FONT_HEADING>);

export const FONT_CLASS_NAMES = [fontBase.variable, fontHeading.variable] as const;

type Font<F extends (...args: any) => any, V> = Parameters<F>[0] & {
	variable: V;
};
