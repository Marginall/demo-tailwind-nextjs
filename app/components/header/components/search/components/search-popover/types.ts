import { ProductCardSmallData } from '@/_components/product-card-small';
import { SearchCategoryType } from '../search-categories';

export interface SearchPopoverProps {
	isOpen: boolean;

	onClose(): void;

	onOpenChange(isOpen: boolean): void;
}

export interface SearchHandlerReturnType {
	products: ProductCardSmallData[];
	categories: SearchCategoryType[];
}
