import { getSuppliers } from '$lib/server/database/suppliers';

export function load() {
	return {
		suppliers: getSuppliers()
	};
}
