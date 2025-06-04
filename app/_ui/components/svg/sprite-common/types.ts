export const commonSymbols = ['person', 'telegram', 'rss', 'facebook', 'menu', 'hot', 'video', 'search'] as const;
export type CommonSymbol = (typeof commonSymbols)[number];
