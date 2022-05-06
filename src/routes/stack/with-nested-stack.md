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

	.item--nested {
		background-color: pink;
	}

	.stack__split-after {
		background-color: mediumaquamarine;
	}

	.item-extra {
		background-color: orange;
	}

	.item-in-cover {
		background-color: coral;
		height: 100%;
	}

	.test-container {
		width: 100%;
		height: 100vh;
	}
</style>

# Stack - with a nested stack

The parent Stack's `stackSpace` should not cascade in to the child Stack.

## Props

<PropSelect options={space_options} name="stackSpace" bind:value={stackSpace} />

## Example

<SqueezeContainer>
	<Stack {stackSpace}>
		<span class="item">Item</span>
		<span class="item">Item</span>

    	<Stack stackSpace="var(--s-3)">
    		<span class="item item--nested">Nested item</span>
    		<span class="item item--nested">Nested item</span>
    		<span class="item item--nested">Nested item</span>
    	</Stack>

    	<span class="item">Item</span>
    	<span class="item">Item</span>
    	<span class="item">Item</span>
    </Stack>

</SqueezeContainer>
