/**
 * Marks the structure of the response as inappropriate to the expected one
 * @example
 * if (data.item) {
 *     return data.item;
 * } else {
 *     throw new InappropriateResponseError()
 * }
 */
export class InappropriateResponseError extends Error {
	constructor(message = 'Inappropriate response structure') {
		super(message);
	}
}
