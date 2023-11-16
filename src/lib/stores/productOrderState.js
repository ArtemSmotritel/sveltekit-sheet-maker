import { writable } from 'svelte/store';

/**
 * @typedef {Object} Product
 * @property {string} name
 * @property {number} quantity
 * @property {string} quantityIdentifier
 * @property {string=} specialInput
 */

/**
 * @typedef {Object} ProductReportState
 * @property {Product[]} products
 */

/**
 * @function
 *
 * @returns {ProductReportState}
 */
const initialState = () => ({
	products: [{ name: 'abobus', quantity: 0, quantityIdentifier: 'kg' }]
});

const createProductOrderStore = () => {
	const { subscribe, set, update } = writable(initialState());

	const addProduct = (/** @type {Product} */ product) =>
		update((/** @type {ProductReportState} */ state) => ({
			...state,
			products: [...state.products, product]
		}));

	const removeProduct = (/** @type {string} */ productName) =>
		update((/** @type {ProductReportState} */ state) => ({
			...state,
			products: state.products.filter((p) => p.name !== productName)
		}));

	const useSomeReport = (/** @type {{ products: Product[]; }} */ report) =>
		update((/** @type {ProductReportState} */ state) => ({
			...state,
			products: report.products
		}));

	return {
		subscribe,
		addProduct,
		removeProduct,
		useSomeReport,
		reset: () => set(initialState())
	};
};

export const productOrderStore = createProductOrderStore();
