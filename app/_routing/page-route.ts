export type Params = Record<
	string,
	string | number | boolean | string[] | number[] | boolean[]
>;

export type Segments = Record<string, string | number>;

export interface Options {
	pathname: string;
	disabled?: boolean;
}

/**
 * @template S - Route segments
 * @template P - URL Get parameters
 * @template H - URL hash
 */
export class PageRoute<
	S extends Segments | null = null,
	P extends Params | null = null,
	H extends Array<string> = Array<string>,
> {
	protected readonly pathname: string;
	protected readonly disabled: boolean;
	public readonly buildHref: BuildFn<S, P, H[number]>;

	constructor({ pathname, disabled }: Options) {
		this.pathname = pathname;
		this.disabled = !!disabled;
		this.buildHref = ((_: BuildVarietyParams<S, P, H[number]> = {}) => {
			const helper = new BuildHelper(
				this.pathname,
				_.segments || null,
				_.params || null,
				_.hash || null
			);
			return helper.build();
		}) as BuildFn<S, P, H[number]>;
	}

	get isAllowed(): boolean {
		return !this.disabled;
	}

	anchor(hash: H[number]): string {
		return hash;
	}

	anchorHref(hash: H[number]): string {
		return `#${hash}`;
	}
}

type BuildFn<Segments, Params, Hash> = Segments extends null
	? (config?: ExtraParams<Params, Hash>) => string
	: (config: { segments: Segments } & ExtraParams<Params, Hash>) => string;

type BuildVarietyParams<Segments, Params, Hash> = {
	segments?: Segments;
} & ExtraParams<Params, Hash>;

type ExtraParams<Params, Hash> = { params?: Params; hash?: Hash };

// -----------------------------------------------------------------------------

class BuildHelper {
	constructor(
		private pathname: string,
		private segments: Segments | null,
		private params: Params | null,
		private hash: string | null
	) {}

	build(): string {
		let path = this.pathname;
		path = this.replaceSegments(path);
		path = this.addGetParams(path);
		path = this.addHash(path);
		return path;
	}

	private replaceSegments(pathname: string): string {
		if (this.segments !== null) {
			Object.entries(this.segments).forEach(([key, value]) => {
				const pattern = `[${key}]`;
				pathname = pathname.replaceAll(pattern, String(value));
			});
		}
		return pathname;
	}

	private addGetParams(pathname: string): string {
		if (this.params) {
			const url = new URL(pathname, 'https://localhost');
			Object.entries(this.params).forEach(([key, value]) => {
				const values = Array.isArray(value) ? value : [value];
				values.forEach((v) => url.searchParams.append(key, String(v)));
			});
			return url.href.replace(url.origin, '');
		}
		return pathname;
	}

	private addHash(url: string): string {
		return this.hash ? `${url}#${this.hash}` : url;
	}
}
