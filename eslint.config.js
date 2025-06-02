import pluginJs from '@eslint/js';
import pluginNext from '@next/eslint-plugin-next';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} Config */
const configs = [
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
		},
		settings: { react: { version: 'detect' } },
		plugins: {
			'react-hooks': pluginReactHooks,
			next: pluginNext,
		},
	},
	pluginJs.configs.recommended,
	pluginPrettier,
	pluginReact.configs.flat.recommended,
	...tsEslint.configs.recommended,
	{
		rules: {
			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off',
			'no-restricted-imports': [
				'error',
				{ paths: getRestrictedImports() },
			],
		},
	},
];

export default configs;

function getRestrictedImports() {
	return [
		{
			name: 'next-intl',
			importNames: ['useTranslations'],
			message: 'Use `useI18n` hook from "@/_i18n/use-i18n" instead',
		},
		{
			name: 'next-intl/server',
			importNames: ['getTranslations'],
			message: 'Use `getI18n` from "@/_i18n/get-i18n" instead',
		},
		{
			name: 'react',
			importNames: ['FC'],
			message:
				'Use `function Comp ({ ... }: Props): ReactNode {}` instead of `const Comp: FC<Props> = ({ ... }) => {}`',
		},
		{
			name: 'next/navigation',
			importNames: ['usePathname', 'useRouter', 'redirect'],
			message:
				'You may import `usePathname`, `useRouter` and `redirect` only from `@/_routing/navigation`',
		},
		{
			name: 'next/link',
			message: 'You may import `Link` only from `@/_routing/navigation`',
		},
	];
}
