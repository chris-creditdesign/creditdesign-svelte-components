<script lang="ts">
	import type { Space } from '$lib/types';
	import Box from '$lib/Box/index.svelte';
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
	import PropSelect from '$lib/PropSelect/index.svelte';

	import { space_options } from '../../preview-content/options';

	let boxSpace: Space = 'var(--s-1)';
</script>

<style>
	span {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: none;
		height: 100px;
		background-color: lightblue;
	}
</style>

# Box

## Props

<PropSelect options={space_options} name="boxSpace" bind:value={boxSpace} />

## Example

<SqueezeContainer>
	<Box {boxSpace}><span>Item</span></Box>
</SqueezeContainer>
