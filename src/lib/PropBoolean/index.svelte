<script lang="ts">
	import Cluster from '$lib/Cluster/index.svelte';

	interface Props {
		value: boolean;
		name: string;
	}

	let { value = $bindable(), name }: Props = $props();

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
