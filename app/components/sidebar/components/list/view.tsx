'use client';
import { ReactElement, useState } from 'react';
import { ListProps } from './types';
import { UiButton } from '@/_ui';
import { Card } from '../card';
import { UiLink } from '@/_ui/components/link';
import React from 'react';

export function List({ data, translate }: ListProps): ReactElement {
	const [showAllCards, setShowAllCards] = useState<boolean>(false);

	return (
		<div className={'px-[25px] pb-[25px]'}>
			<div className={'flex-column gap-2'}>
				{data.map((record, i) => (
					<React.Fragment key={record.id}>
						{!showAllCards && i < 10 ? (
							<>
								<Card key={record.id} data={record} />
								{!showAllCards && i < 9 ? <div className={'border-b border-gray-300'}></div> : null}
							</>
						) : showAllCards ? (
							<>
								<Card key={record.id} data={record} />
								{i < data.length - 1 ? <div className={'border-b border-gray-300'}></div> : null}
							</>
						) : null}
					</React.Fragment>
				))}
			</div>
			{!showAllCards ? (
				<UiButton className={'w-full'} size='lg' onClick={() => setShowAllCards(!showAllCards)}>
					{translate}
				</UiButton>
			) : null}
			{showAllCards ? (
				<UiLink href={'/news'} passHref>
					<UiButton as={'a'} className={'w-full'} size='lg'>
						{translate}
					</UiButton>
				</UiLink>
			) : null}
		</div>
	);
}
