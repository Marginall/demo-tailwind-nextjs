import { assertUnreachable } from '@/_utils/assert-unreachable';
import { usePathname } from '@/_routing/navigation';

export type MatchType = 'startsWith' | 'exact';

export function useIsActiveSection(
	href: string,
	match: MatchType = 'startsWith'
): boolean {
	const pathname = usePathname();
	switch (match) {
		case 'startsWith':
			return pathname.startsWith(href);
		case 'exact':
			return pathname === href;
		default:
			assertUnreachable(match);
	}
}
