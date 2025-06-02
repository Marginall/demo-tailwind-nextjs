export interface UiImageType {
	src?: string | null;
	srcWebp?: string | null;
	src2xWebp?: string | null;
	srcSmall?: string | null;
	srcSmallWebp?: string | null;
	src2xSmallWebp?: string | null;
	alt?: string | null;
	title?: string | null;
}

interface UiImageSlots {
	picture?: string;
	img?: string;
}

export interface UiImageProps extends UiImageType {
	className?: string;
	classNames?: UiImageSlots;
	width?: number;
	height?: number;
	loading?: 'lazy' | 'eager';
}
