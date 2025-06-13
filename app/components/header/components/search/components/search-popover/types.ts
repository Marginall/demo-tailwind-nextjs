export interface SearchPopoverProps {
	isOpen: boolean;

	onClose(): void;

	onOpenChange(isOpen: boolean): void;
}
