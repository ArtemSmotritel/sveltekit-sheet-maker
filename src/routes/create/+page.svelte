<script>
	export let data;
	const suppliers = data.suppliers;
</script>

<h4>Choose</h4>

<ul>
	{#each suppliers as { id, name } (id)}
		<li><a href={`create/${id}`}>{name}</a></li>
	{/each}
</ul>
