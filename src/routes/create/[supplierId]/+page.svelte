<script>
	import { productOrderStore } from '$lib/stores/productOrderState.js';
	import { page } from '$app/stores';

	import ProductForm from '$lib/components/ProductForm.svelte';
	import ProductListItem from '$lib/components/ProductListItem.svelte';

	const doesPreviousOrderExist = true;

	const addProduct = (/** @type {any} */ prop) =>
		productOrderStore.addProduct(prop.detail.product);
	const selectProductForEdit = (/** @type {any} */ product) => console.log(product);
	const removeProduct = (/** @type {string} */ productName) =>
		productOrderStore.removeProduct(productName);

	const usePreviousOrder = () => {};

	const quantityIdentifierOptions = ['кг', 'шт', 'л', 'уп'];
</script>

<article>
	<main>
		<ol>
			{#each $productOrderStore.products as product (product.name)}
				<li>
					<ProductListItem on:remove={() => removeProduct(product.name)} {...product} />
				</li>
			{/each}
		</ol>
	</main>
	<footer>
		<ProductForm on:createProduct={addProduct} {quantityIdentifierOptions} />
	</footer>
</article>

{#if doesPreviousOrderExist}
	<button on:click={usePreviousOrder} type="button">Use previous order</button>
{/if}

<a href={`/create/${$page.params.supplierId}/summary`} role="button" class="contrast">Next</a>
