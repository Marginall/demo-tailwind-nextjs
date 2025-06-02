import { CurrentDomainSocialsFragment, NavCategoryFragment } from '@/_library/graphql';
import { LocalesItem } from '../locales/types';

export interface HeaderModel {
	locales: LocalesItem[];
	navCategories: NavCategoryFragment[];
	logo: string;
	socials: CurrentDomainSocialsFragment[];
	weather: {
		icon: string;
		temperature: number;
	};
	currency: {
		USD: number | null;
		EUR: number | null;
	};
	trendTags: {
		slug: string;
		translate: {
			title: string;
		};
	}[];
}
