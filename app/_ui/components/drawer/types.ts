import { ReactNode } from 'react';
import { DrawerProps } from '@heroui/react';

export interface UiDrawerProps
	extends Omit<DrawerProps, 'children' | 'title' | 'size' | 'closeButton' | 'hideCloseButton'> {
	children(onClose: () => void): ReactNode;

	pending?: boolean;
	slots?: {
		header?: string;
		body?: string;
		footer?: string;
	};
	title?: string;
	footer?: ReactNode;
	headerBlock?: ReactNode;
}
