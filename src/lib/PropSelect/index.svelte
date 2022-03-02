<script lang="ts">
	import Stack from '$lib/Stack/index.svelte';

	export let options: string[];
	export let value: string;
	export let name: string;

	let id = name.toLowerCase();
</script>

<style>
	label {
		font-weight: 800;
	}
</style>

<Stack stackSpace="var(--s-4)">
	<label for={id}>{name}:</label>
	<select {id} bind:value>
		{#each options as option}
			<option value={option}>
				{option}
			</option>
		{/each}
	</select>
</Stack>
