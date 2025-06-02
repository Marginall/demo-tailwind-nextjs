import { CurrentDomainSocialsFragment, NavCategoryFragment } from '@/_library/graphql';

export interface FooterModel {
	navCategories: NavCategoryFragment[];
	socials: CurrentDomainSocialsFragment[];
}
