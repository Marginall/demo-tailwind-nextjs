export function getTestid(name: string): Record<string, string> {
	return process.env.NEXT_PUBLIC_ENABLE_TEST_ID === 'true'
		? { 'data-testid': name }
		: {};
}
