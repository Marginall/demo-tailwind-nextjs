'use client';
import { createContext } from 'react';
import { DataContext } from '../types';

export const defaultDataContext: DataContext = {
	update: () => {},
	env: {
		GRAPHQL_API_CSR: '/',
		APP_URL: '/',
	},
	translations: {},
	socials: [],
	navCategories: [],
	currentDomain: null,
	currentDomainSetting: null,
	pagesList: [],
	newsColumn: [],
	pathname: '/',
};

export const Context = createContext<DataContext>(defaultDataContext);
