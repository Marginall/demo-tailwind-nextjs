export const commonSymbols = ['person', 'telegram', 'rss', 'facebook', 'menu', 'hot', 'video'] as const;
export type CommonSymbol = (typeof commonSymbols)[number];
