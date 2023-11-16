<script>
	import { createEventDispatcher } from 'svelte';

	/**
	 * @type {HTMLInputElement}
	 */
	let nameInput;

	let name = '';
	let quantity = 0;
	/**
	 * @type {string}
	 */
	let quantityIdentifier;
	let specialInput = '';
	/**
	 * @type {string[]}
	 */
	export let quantityIdentifierOptions = [];

	const dispatch = createEventDispatcher();

	const add = () => {
		dispatch('createProduct', {
			product: {
				name,
				quantity,
				quantityIdentifier,
				specialInput
			}
		});
		name = '';
		specialInput = '';
		nameInput?.focus();
	};
</script>

<details open>
	<summary>Form</summary>
	<form class="main-container" on:submit|preventDefault={add}>
		<label>
			Name
			<input placeholder="What" bind:this={nameInput} required type="text" bind:value={name} />
		</label>
		<div>
			<label>
				Quantity
				<input placeholder="How many" required type="number" bind:value={quantity} />
			</label>
			<label>
				Ident
				<select placeholder="abobus" required bind:value={quantityIdentifier}>
					{#each quantityIdentifierOptions as option (option)}
						<option value={option}>{option}</option>
					{/each}
				</select>
			</label>
		</div>
		<details>
			<summary class="secondary">Add special info</summary>
			<input placeholder="Day of the week, for example" type="text" bind:value={specialInput} />
		</details>
		<button type="submit">Add</button>
	</form>
</details>

<style>
	details:first-child {
		border-bottom: 0;
		padding-bottom: 0;
	}

	.main-container {
		display: flex;
		flex-direction: column;
	}

	.main-container > div {
		display: flex;
		gap: var(--spacing);
	}

	label {
		flex: 1;
	}

	.main-container button,
	form,
	details > input {
		margin-bottom: 0;
	}

	@media screen and (max-width: 576px) {
		.main-container > label:first-child input {
			margin-bottom: 0;
		}
	}
</style>
