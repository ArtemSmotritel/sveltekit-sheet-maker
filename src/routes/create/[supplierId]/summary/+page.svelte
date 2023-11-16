<script>
	import { productOrderStore } from '$lib/stores/productOrderState.js';
	import ProductListItem from '$lib/components/ProductListItem.svelte';
	import { goto } from '$app/navigation';

	export let data;

	const removeProduct = (/** @type {string} */ productName) =>
		productOrderStore.removeProduct(productName);

	const save = () => {
		const promise = fetch('/create', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify($productOrderStore.products)
		});

		promise.then((response) => {
			if (response.ok) {
				// show toast r message
				console.log('success');
				goto(`/create/${data.supplier.id}/result`);
			}
		});
	};
</script>

<form on:submit|preventDefault={save}>
	<section>
		<ol>
			{#each $productOrderStore.products as product (product.name)}
				<li>
					<ProductListItem on:remove={() => removeProduct(product.name)} {...product} />
				</li>
			{/each}
		</ol>
	</section>
	<button type="submit">Create</button>
</form>
