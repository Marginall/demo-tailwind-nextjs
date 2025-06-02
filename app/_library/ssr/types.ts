import { ReactNode } from 'react';
import {
	CurrentDomainFragment,
	CurrentDomainSettingFragment,
	CurrentDomainSocialsFragment,
	NavCategoryFragment,
	NewsColumnFragment,
	PagesListFragment,
} from '../graphql';

export interface CommonDataEnv {
	GRAPHQL_API_CSR: string;
	APP_URL: string;
}

export interface CommonData {
	env: CommonDataEnv;
	pathname: string;
	translations: Record<string, any>;
	navCategories: NavCategoryFragment[];
	currentDomain: CurrentDomainFragment | null;
	currentDomainSetting: CurrentDomainSettingFragment | null;
	// currentDomainSocials: CurrentDomainSocials[];
	// allDomains: AllDomain[];
	pagesList: PagesListFragment[];
	// userProfile: UserProfileData | null;
	// banners: BannerFragment[];
	// homePage: HomePageFragment;
	newsColumn: NewsColumnFragment[];
	socials: CurrentDomainSocialsFragment[];
}

export interface DataContext extends CommonData {
	update: (newData: Partial<DataContext>) => void;
}

export interface DataProviderProps extends CommonData {
	children?: ReactNode;
}

export interface GetCommonDataProps {}
