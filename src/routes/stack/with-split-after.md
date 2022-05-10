<script lang="ts">
	import type { Space } from '$lib/types';
	import Stack from '$lib/Stack/index.svelte';
	import Sidebar from "$lib/Sidebar/index.svelte";
	import Cover from "$lib/Cover/index.svelte";
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
	import PropSelect from '$lib/PropSelect/index.svelte';

	import { space_options } from '../../preview-content/options';

	let stackSpace: Space = 'var(--s-1)';
</script>

<style>
	.item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: none;
		height: 100px;
		background-color: lightblue;
	}

	.margin-block-end\:auto {
		background-color: mediumaquamarine;
	}

	.test-container {
		width: 100%;
		height: 100vh;
	}
</style>

# Stack - with 'split after'

## Props

<PropSelect options={space_options} name="stackSpace" bind:value={stackSpace} />

## Examples

<SqueezeContainer>
	<div class="test-container">
		<Stack {stackSpace}>
			<span class="item">Item</span>
			<span class="item">Item</span>
			<span class="item">Item</span>
			<span class="item margin-block-end:auto">.margin-block-end:auto</span>
			<span class="item">Item</span>
		</Stack>
	</div>
</SqueezeContainer>
