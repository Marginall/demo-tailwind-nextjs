import { ConfigTheme } from '@heroui/react';

export const lightThemeHeroui: ConfigTheme = {
	colors: {
		primary: {
			DEFAULT: '#4444fe', // Main
			foreground: '#ffffff', // Main Contrast
			'50': '#fe4444', // Main 4%
			'100': '#111111',
		},
		// link: {
		// 	default: '#4444fe',
		// 	hover: '#fe4444',
		// 	active: '#111'
		// },
		foreground: {
			DEFAULT: '#000000', // Primary Text
			'50': '#333333',
			'100': '#9FA4A8',
			'200': '#b7bbbe',
			'300': '#404040',
			'400': '#ffffff',
			'500': '#BBBBBB',
			'600': '#BEBFBF',
			'700': '#EBF0F5',
			'800': '#DFE1E7',
			'900': '#FAFBFC',
		},
		// textExtended: {
		// 	gray: '#9FA4A8',
		// 	lightGray: '#b7bbbe',
		// 	dark: '#404040',
		// 	white: '#ffffff',
		// 	midGray: '#BBBBBB',
		// 	gr1: '#BEBFBF',
		// 	gr2: '#EBF0F5',
		// 	gr3: '#DFE1E7',
		// 	wt1: '#FAFBFC',
		// 	bl1: '#262728',
		// 	bl2: '#373B3F',
		// 	bl3: '#121212'
		// },
		secondary: {
			DEFAULT: '#FAFAFA', // Secondary
			foreground: '#FBFBFB',
			'50': '#DFE1E7', // Secondary 4%
			'100': '#e6e6e6', // Secondary 8%
			'200': '#eaedef',
		},
		background: {
			DEFAULT: '#FAFAFA', // Background
		},
		// backgroundExtended: {
		// 	primary: '#FAFAFA',
		// 	secondary: '#FBFBFB',
		// 	gray: '#DFE1E7',
		// 	lightGray: '#e6e6e6',
		// 	gray2: '#eaedef'
		// }
	},
};
