<script lang="ts">
	import Stack from '$lib/Stack/index.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	let width = $state(100);
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
	<input type="range" bind:value={width} min="0" max="100" />

	<div class="squeeze-container" style={`width: ${width}%;`}>
		{@render children?.()}
	</div>
</Stack>
