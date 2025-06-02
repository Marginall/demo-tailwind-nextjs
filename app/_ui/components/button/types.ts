import { ButtonProps } from '@heroui/react';

export interface UiButtonProps extends ButtonProps {
	href?: string;
	target?: string;
	download?: string | boolean;
	classNames?: {
		base?: string;
		content?: string;
	};
}
