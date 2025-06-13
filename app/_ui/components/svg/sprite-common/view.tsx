import { ReactElement } from 'react';
import { PersonSymbol } from './components/person';
import { FacebookSymbol } from './components/facebook';
import { RssSymbol } from './components/rss';
import { TelegramSymbol } from './components/telegram';
import { MenuSymbol } from './components/menu';
import { HotSymbol } from './components/hot';
import { VideoSymbol } from './components/video';
import { SearchSymbol } from './components/search';

export function UiSvgSpriteCommon(): ReactElement {
	return (
		<div hidden>
			<svg>
				<PersonSymbol />
				<FacebookSymbol />
				<RssSymbol />
				<TelegramSymbol />
				<MenuSymbol />
				<HotSymbol />
				<VideoSymbol />
				<SearchSymbol />
			</svg>
		</div>
	);
}
