import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { DocumentMetadata } from '../view';

describe('DocumentMetadata', () => {
	it('should render title element', () => {
		const title = 'Lorem ipsum';
		render(<DocumentMetadata title={title} keywords={['foo', 'bar', 'baz']} />);
		expect(document.title).toEqual(title);
		expect(screen.queryByText(title)).toBeNull();
	});

	it('should render meta keywords with joined value', () => {
		render(<DocumentMetadata keywords={['foo', 'bar', 'baz']} />);
		const metaKeywords = document.querySelector<HTMLMetaElement>('meta[name="keywords"]');
		expect(metaKeywords?.content).toEqual('foo,bar,baz');
	});
});
