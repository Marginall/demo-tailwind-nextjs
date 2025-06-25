'use client';
import { ListProps } from './types';
import { Card } from '../card';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { CATEGORY_ARTICLES } from '../../gql';
import { CategoryArticlesQuery, CategoryArticlesQueryVariables } from '@/_library/graphql';
import { arrayFilterNullable } from '@wezom/toolkit-array';

export function List({ slug, data, translates }: ListProps) {
	const [articles, setArticles] = useState(data);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);

	const [getMore, { loading }] = useLazyQuery<CategoryArticlesQuery, CategoryArticlesQueryVariables>(
		CATEGORY_ARTICLES,
		{
			fetchPolicy: 'network-only',
			onCompleted: (result) => {
				const newItems = arrayFilterNullable(result?.Articles?.data) ?? [];
				setArticles((prev) => {
					const all = [...prev, ...newItems];
					const unique = Array.from(new Map(all.map((item) => [item.id, item])).values());
					return unique;
				});
				setHasMore(newItems.length > 0);
			},
		}
	);

	const loaderRef = useRef<HTMLDivElement | null>(null);

	const handleObserver = useCallback(
		(entries: IntersectionObserverEntry[]) => {
			const target = entries[0];
			if (target && target.isIntersecting && hasMore && !loading) {
				getMore({
					variables: {
						page: page + 1,
						slug,
					},
				});
				setPage((prev) => prev + 1);
			}
		},
		[hasMore, loading, getMore, page]
	);

	useEffect(() => {
		const option = { root: null, rootMargin: '20px', threshold: 1.0 };
		const observer = new window.IntersectionObserver(handleObserver, option);
		if (loaderRef.current) observer.observe(loaderRef.current);
		return () => {
			if (loaderRef.current) observer.unobserve(loaderRef.current);
		};
	}, [handleObserver]);

	return (
		<div className={'flex flex-col gap-5'}>
			<div className='grid grid-cols-4 gap-5'>
				{articles && articles.length > 0 ? (
					articles.map((article, index) => (
						<div className={`h-[300px] border border-gray-200 rounded-[3px]`} key={article.id}>
							<Card data={article} />
						</div>
					))
				) : (
					<p>{translates.empty}</p>
				)}
			</div>
			<div ref={loaderRef} style={{ height: 40, display: hasMore ? 'block' : 'none' }}>
				{loading && <p>Загрузка...</p>}
			</div>
		</div>
	);
}
