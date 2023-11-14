import { deepCopy } from '$lib/utils';

/**
 * @typedef {Object} Supplier
 * @property {number} id
 * @property {string} name
 */

const suppliers = [
	{
		id: 1,
		name: 'hodak'
	},
	{
		id: 2,
		name: 'yuri'
	},
	{
		id: 3,
		name: 'primeTerra'
	}
];

/**
 * @function
 *
 * @returns {Supplier[]}
 */
export function getSuppliers() {
	return deepCopy(suppliers);
}

/**
 * @function
 *
 * @param {number} supplierId
 *
 * @returns {Supplier}
 */
export function getSupplierById(supplierId) {
	const supplier = suppliers.find((s) => s.id === supplierId);

	return deepCopy(supplier);
}
