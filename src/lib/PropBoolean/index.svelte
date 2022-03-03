<script lang="ts">
	import Cluster from '$lib/Cluster/index.svelte';

	export let value: boolean;
	export let name: string;

	let id = name.toLowerCase();
</script>

<style>
	label {
		font-weight: 800;
	}
</style>

<Cluster clusterSpace="var(--s-4)">
	<label for={id}>{name}:</label>
	<input type="checkbox" {id} bind:checked={value} />
</Cluster>
