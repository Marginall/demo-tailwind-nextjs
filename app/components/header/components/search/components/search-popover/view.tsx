import { SearchPopoverProps } from './types';
import { Drawer, DrawerContent } from '@heroui/react';
import { useEffect, useRef, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useLazyQuery } from '@apollo/client';
import { usePathname, useSearchParams } from 'next/navigation';
import { SEARCH_QUERY } from '../../gql';
import { ArticleType, SearchQuery, SearchQueryVariables } from '@/_library/graphql';
import { UiButton, UiContainer, UiInput } from '@/_ui';
import { UiSvgIcon } from '@/_ui/components/svg/icon';
import { arrayFilterNullable } from '@wezom/toolkit-array';
import { Card } from '../card';

export const SearchPopover: React.FC<SearchPopoverProps> = ({ onOpenChange, isOpen, onClose: onDrawerClose }) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const defaultSearchValue = searchParams.get('search');
	const searchValueRef = useRef<string | undefined>(defaultSearchValue || undefined);
	const [searchIsActive, setSearchActive] = useState<boolean>(!!defaultSearchValue);
	const [data, setData] = useState<ArticleType[]>([]);

	const drawerRef = useRef<HTMLDivElement | null>(null);
	const [getSearch] = useLazyQuery<SearchQuery, SearchQueryVariables>(SEARCH_QUERY);
	const handleSearch = useDebouncedCallback<{ (value: string | null): Promise<void> }>(async (value) => {
		const { data } = await getSearch({
			variables: {
				query: value || '',
			},
		});
		if (data && data.items) {
			setData(arrayFilterNullable(data.items.data));
		}
		setSearchActive(typeof value === 'string' && value.length > 0);
	}, 700);

	const handleClose = (onClose: () => void): void => {
		setSearchActive(false);
		setData([]);
		searchValueRef.current = undefined;
		onClose();
	};

	useEffect(() => {
		if (defaultSearchValue) {
			handleSearch(defaultSearchValue)?.catch((e) => console.error(e));
		}
	}, [defaultSearchValue]);

	useEffect(() => {
		handleClose(onDrawerClose);
	}, [pathname]);

	useEffect(() => {
		setSearchActive(!!defaultSearchValue || (!!searchValueRef.current && searchValueRef.current.length > 0));
	}, [searchValueRef.current, defaultSearchValue]);

	return (
		<Drawer
			ref={drawerRef}
			isDismissable={false}
			hideCloseButton
			placement='top'
			isOpen={isOpen}
			classNames={{
				wrapper: 'h-full',
			}}
			onOpenChange={onOpenChange}
			onClose={() => {
				handleClose(onDrawerClose);
			}}
		>
			<DrawerContent className='rounded-none max-w-none max-md:h-full max-h-none w-full pb-10 bg-black'>
				{(onClose) => (
					<>
						<div className='mb-5'>
							<UiContainer>
								<div className='flex justify-end mb-4 md:mb-1.5 md:mt-2'>
									<UiButton variant='solid' onPress={onClose} className='text-white'>
										X
									</UiButton>
								</div>
								<UiInput
									autoFocus
									// onFocus={() => {
									// 	setTimeout(() => {
									// 		drawerRef.current?.scroll({
									// 			top: 0,
									// 			behavior: 'smooth',
									// 		});
									// 	}, 600);
									// }}
									isClearable={true}
									placeholder={'search...'}
									size={'sm'}
									classNames={{
										input: 'ml-2 text-white',
										inputWrapper: 'mt-2 px-3 py-2 border border-white rounded tex-white',
										clearButton: 'hover:text-[#fe4444] !flex items-center justify-center',
									}}
									defaultValue={defaultSearchValue || searchValueRef.current}
									startContent={<UiSvgIcon symbol={'search'} />}
									// endContent={<UiSvgIcon symbol={'menu'} />}
									variant={'flat'}
									color={'default'}
									onClear={() => {
										setSearchActive(false);
										searchValueRef.current = undefined;
									}}
									onChange={async (event) => {
										if (event.target.value.length > 2) {
											searchValueRef.current = event.target.value;
											await handleSearch(event.target.value);
										} else {
											setSearchActive(false);
										}
									}}
								/>
							</UiContainer>
						</div>
						{searchIsActive && data.length !== 0 ? (
							<UiContainer>
								<div className={'grid grid-cols-3 gap-4'}>
									{data.map((article) => (
										<Card key={article.id} data={article} />
									))}
								</div>
							</UiContainer>
						) : null}
						{data.length === 0 ? (
							<UiContainer>
								<div className={'text-center text-white text-md'}>
									Запит не знайдено, уточніть свій пошук
								</div>
							</UiContainer>
						) : null}
					</>
				)}
			</DrawerContent>
		</Drawer>
	);
};
