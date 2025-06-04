'use client';
import { ReactElement } from 'react';
import { useDisclosure } from '@heroui/react';
import { SearchPopover } from './components/search-popover';
import { SearchHeaderInput } from './components/header-input';
import { getTestid } from '@/_ui/utils/get-testid';

export function HeaderSearch(): ReactElement {
	const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

	return (
		<div {...getTestid('header-search')} className={'w-full'}>
			<SearchHeaderInput onOpen={onOpen} />
			<SearchPopover isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose} />
		</div>
	);
}
