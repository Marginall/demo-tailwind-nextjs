import { ReactElement } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTopArticles } from './model';
import { Slider } from './components/slider';

export async function TopArticles(): Promise<ReactElement> {
	const { topArticlesToday } = await useTopArticles();

	return (
		<div className={'w-full overflow-hidden'}>
			<Slider data={topArticlesToday} />
		</div>
	);
}
