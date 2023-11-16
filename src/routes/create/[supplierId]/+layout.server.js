import { getSupplierById } from '$lib/server/database/suppliers.js';

export function load({ params }) {
	return {
		supplier: getSupplierById(+params.supplierId)
	};
}
