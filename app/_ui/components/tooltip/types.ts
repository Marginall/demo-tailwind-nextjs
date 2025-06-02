import { TooltipProps } from '@heroui/react';

export interface UiTooltipProps extends TooltipProps {
	slots?: {
		wrapper?: string;
	};
}
