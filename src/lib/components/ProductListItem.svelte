<script>
	import { createEventDispatcher } from 'svelte';

	export let name = '';
	export let quantity = 0;
	export let quantityIdentifier = '';
	export let specialInput = '';

	const dispatch = createEventDispatcher();

	const remove = () => dispatch('remove');
</script>

<div class="main-container pointer">
	<span>{name}</span>
	{#if !!specialInput}
		<span>{specialInput}</span>
	{/if}
	<div>
		<span>{quantity}</span>
		<span>{quantityIdentifier}</span>
		<button on:click={remove} class="outline secondary">x</button>
	</div>
</div>

<style>
	.main-container {
		display: flex;
		justify-content: space-between;
		border-bottom: 2px dashed var(--contrast);
		align-items: flex-end;
	}

	.main-container > div {
		display: flex;
		align-items: flex-end;
	}

	.main-container > div > span:nth-child(1) {
		margin-right: calc(var(--spacing) * 0.5);
	}

	.main-container > div > button {
		color: var(--del-color);
		margin-left: var(--spacing);
		margin-bottom: calc(var(--spacing) * 0.25);
		padding-block: 0;
		padding-inline: calc(var(--form-element-spacing-horizontal) * 0.5);
	}
</style>
