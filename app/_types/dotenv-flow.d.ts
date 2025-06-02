declare module 'dotenv-flow' {
	interface DotenvFlowConfigOptions {
		path?: string;
		encoding?: string;
		purge_dotenv?: boolean;
	}

	export function config(options?: DotenvFlowConfigOptions): void;
}
