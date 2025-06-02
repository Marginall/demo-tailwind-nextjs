import { CurrentDomainSocialsFragment } from '@/_library/graphql';

export interface SocialsData {
	data: CurrentDomainSocialsFragment[];
	withTitle?: boolean;
}
