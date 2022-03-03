<script lang="ts">
	import Stack from '$lib/Stack/index.svelte';

	export let headline: string;

	let width = 100;
</script>

<style>
	.squeeze-container {
		border: 4px solid black;
	}

	input[type='range'] {
		width: 100%;
		max-width: 100%;
	}
</style>

<Stack stackSpace="var(--s-2)">
	<h3>{headline}</h3>

	<input type="range" bind:value={width} min="0" max="100" />

	<div class="squeeze-container" style={`width: ${width}%;`}>
		<slot />
	</div>
</Stack>
