// import { useData } from '@/_library/ssr';
import { getCommonData } from '@/_library/ssr/server';
import { FooterModel } from './type';

export async function useFooter(): Promise<FooterModel> {
	const { navCategories, socials } = await getCommonData();

	return {
		navCategories,
		socials: socials,
	};
}
