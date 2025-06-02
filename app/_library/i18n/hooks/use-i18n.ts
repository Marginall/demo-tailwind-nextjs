// eslint-disable-next-line no-restricted-imports
import { useTranslations } from 'next-intl';

// Picks only the namespaces that are starting with '$.'
type NS = Parameters<typeof useTranslations>[0] & `$.${string}`;

export const useI18n = <T extends NS>(namespace: T) => {
	return useTranslations(namespace);
};
