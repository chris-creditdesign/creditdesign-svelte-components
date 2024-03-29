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

	.item-in-cover {
		background-color: coral;
		height: 100%;
	}
</style>

# Stack - in Sidebar

## Props

<PropSelect options={space_options} name="stackSpace" bind:value={stackSpace} />

## Examples

<SqueezeContainer>
	<Sidebar>
		<svelte:fragment slot="sidebar">
			<Stack {stackSpace}>
				<span class="item">Item</span>
				<span class="item">Item</span>
				<span class="item">Item</span>
				<span class="item margin-block-end:auto">.margin-block-end:auto</span>
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
