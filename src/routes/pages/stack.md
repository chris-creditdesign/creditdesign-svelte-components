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
	h2 {
		margin-top: var(--s1);
	}

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

# Stack

If flexbox gap is not supported, expects a `no-flexbox-gap` class to be applied to a parent element.

In this case standard `Stack` margirns applied around the child elements.

A child element with `.stack__split-after` applied will push
items below it to the bottom of the container. NB - this is currently broken.

<!--`.stack-list` set to height 100% that the Stack area will fill the available height,
causing the `.stack__split-after` element to be pushed to the bottom.-->

## Props

<PropSelect options={space_options} name="stackSpace" bind:value={stackSpace} />

Also `list` and `className`.

## Examples

<SqueezeContainer headline="Default">
	<Stack {stackSpace}>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
	</Stack>
</SqueezeContainer>

<SqueezeContainer headline="With split after">
	<div class="test-container">
		<Stack {stackSpace}>
			<span class="item">Item</span>
			<span class="item">Item</span>
			<span class="item">Item</span>
			<span class="item stack__split-after">.stack__split-after</span>
			<span class="item">Item</span>
		</Stack>
	</div>
</SqueezeContainer>

<SqueezeContainer headline="With split after and extra item">
	<div class="test-container">
	<span class="item item-extra">This is an extra item, out side of the stack.</span>
		<Stack {stackSpace}>
			<span class="item">Item</span>
			<span class="item">Item</span>
			<span class="item">Item</span>
			<span class="item stack__split-after">.stack__split-after</span>
			<span class="item">Item</span>
		</Stack>
	</div>
</SqueezeContainer>

<SqueezeContainer headline="Test">
	<Sidebar>
		<svelte:fragment slot="sidebar">
			<Stack {stackSpace}>
				<span class="item">Item</span>
				<span class="item">Item</span>
				<span class="item">Item</span>
				<span class="item stack__split-after">.stack__split-after</span>
				<span class="item">Item</span>
			</Stack>
		</svelte:fragment>
		<svelte:fragment slot="main-content">
		<Cover coverSpace="0">
			<span class="item item-in-cover">Item in cover</span>
		</Cover>
		</svelte:fragment>
	</Sidebar>
</SqueezeContainer>

<SqueezeContainer headline="With nested stack">
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

<SqueezeContainer headline="No flexbox gap">
	<div class="no-flexbox-gap">
		<Stack {stackSpace}>
			<span class="item">Item</span>
			<span class="item">Item</span>
			<span class="item">Item</span>
			<span class="item">Item</span>
			<span class="item">Item</span>
		</Stack>
	</div>
</SqueezeContainer>