/**
 * @function
 * @template T
 * @param {T} anything
 *
 * @returns {any}
 */
export function deepCopy(anything) {
	if (anything === null || typeof anything !== 'object') {
		return anything;
	}

	if (Array.isArray(anything)) {
		return anything.map((something) => deepCopy(something));
	}

	const newObj = {};
	for (let key in anything) {
		if (Object.prototype.hasOwnProperty.call(anything, key)) {
			// @ts-ignore
			newObj[key] = deepCopy(anything[key]);
		}
	}

	return newObj;
}
