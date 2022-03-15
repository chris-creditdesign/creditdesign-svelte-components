<script lang="ts">
	import Stack from '$lib/Stack/index.svelte';

	export let value: number;
	export let name: string;
	export let min = 0;
	export let max = 100;

	let id = name.toLowerCase();
</script>

<style>
	label {
		font-weight: 800;
	}
</style>

<Stack stackSpace="var(--s-4)">
	<label for={id}>{name}: {value}</label>
	<input type="range" bind:value {min} {max} />
</Stack>
