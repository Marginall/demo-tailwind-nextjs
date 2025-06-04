'use client';
import { SearchHeaderInputProps } from './types';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { UiInput } from '@/_ui';

export function SearchHeaderInput({ onOpen }: SearchHeaderInputProps) {
	const searchParams = useSearchParams();
	const defaultSearchValue = searchParams.get('search');
	const ref = useRef<HTMLInputElement | null>(null);
	const placeholders = ['Пошук...', 'Search...'];

	const [placeholder, setPlaceholder] = useState<string>('');
	const [textIndex, setTextIndex] = useState<number>(0);
	const [charIndex, setCharIndex] = useState<number>(0);
	const [isDeleting, setIsDeleting] = useState<boolean>(false);

	useEffect(() => {
		if (placeholders.length === 0 || !!defaultSearchValue) return;

		const currentText = placeholders[textIndex % placeholders.length] ?? '';
		let timeout: ReturnType<typeof setTimeout>;

		if (!isDeleting && charIndex < currentText.length) {
			timeout = setTimeout(() => {
				setPlaceholder(currentText.slice(0, charIndex + 1));
				setCharIndex(charIndex + 1);
			}, 140);
		} else if (isDeleting && charIndex > 0) {
			timeout = setTimeout(() => {
				setPlaceholder(currentText.slice(0, charIndex - 1));
				setCharIndex(charIndex - 1);
			}, 40);
		} else if (!isDeleting && charIndex === currentText.length) {
			timeout = setTimeout(() => {
				setIsDeleting(true);
			}, 3000);
		} else if (isDeleting && charIndex === 0) {
			setIsDeleting(false);
			setTextIndex((prev) => (prev + 1) % placeholders.length);
		}

		return () => clearTimeout(timeout);
	}, [charIndex, isDeleting, textIndex, placeholders]);
	return (
		<UiInput
			ref={ref}
			placeholder={placeholder}
			size={'sm'}
			value={defaultSearchValue || ''}
			// startContent={<UiSvgIcon symbol={'menu'} />}
			readOnly
			classNames={{
				input: 'cursor-pointer flex',
				inputWrapper: 'px-3 text-white',
			}}
			variant={'flat'}
			color={'default'}
			onClick={onOpen}
		/>
	);
}
