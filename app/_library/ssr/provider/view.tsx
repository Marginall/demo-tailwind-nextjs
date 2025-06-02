'use client';
import { ReactElement, useState, useEffect } from 'react';
import { DataContext, DataProviderProps } from '../types';
import { Context, defaultDataContext } from './context';

export function DataProvider({ children, ...props }: DataProviderProps): ReactElement {
	const [data, setData] = useState({
		...defaultDataContext,
		...props,
	});

	const update = (newData: Partial<DataContext>): void => {
		setData((prevData) => ({
			...prevData,
			...newData,
		}));
	};

	useEffect(() => {
		update(props);
	}, [setData, JSON.stringify(props)]);

	return (
		<Context.Provider
			value={{
				...data,
				update,
			}}
		>
			{children}
		</Context.Provider>
	);
}
