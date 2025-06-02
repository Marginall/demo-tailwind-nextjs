export interface SidebarModel {
	newsColumn: SidebarArticleCardType[];
}

export interface SidebarArticleCardType {
	id: string;
	date: string;
	categories: {
		id: string;
		slug: string;
		color: string;
		translate: {
			title: string;
		};
	}[];
	translate: {
		title: string;
		slug: string;
	};
	image: string;
	hasVideo: boolean;
}
