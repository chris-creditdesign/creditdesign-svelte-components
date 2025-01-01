<script lang="ts">
	import Stack from '$lib/Stack/index.svelte';

	interface Props {
		value: number;
		name: string;
		min?: number;
		max?: number;
	}

	let {
		value = $bindable(),
		name,
		min = 0,
		max = 100
	}: Props = $props();

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
