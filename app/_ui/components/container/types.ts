import { ReactNode } from 'react';
import { As } from '@heroui/react';

export interface UiContainerProps {
	as?: As;
	children?: ReactNode;
	className?: string;
	variant?: 'default' | 'medium' | 'full' | 'article';
}
