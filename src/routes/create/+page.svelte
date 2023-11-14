<script>
	export let data;
	const suppliers = data.suppliers;
</script>

<h3>Choose</h3>

<ul>
    {#each suppliers as { id, name } (id) }
        <li><a href={`create/${id}`}>{name}</a></li>
    {/each}
</ul>
