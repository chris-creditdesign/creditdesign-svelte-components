<script lang="ts">
	import type { Space, Height } from '$lib/types';
	import Cover from '$lib/Cover/index.svelte';
	import Stack from '$lib/Stack/index.svelte';
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
	import PropSelect from '$lib/PropSelect/index.svelte';

	import { space_options, height_options } from '../../preview-content/options';

	let coverSpace: Space = 'var(--s-1)';
	let coverHeight: Height = '100vh';
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

	.cover__centered {
		background-color: pink;
	}
</style>

# Cover

Centers an item vertically within a defined height.

Expects the item to be centered to have a `.cover__centered` class applied.

Two additional items can be place before and after the centered element.
These will be displayed at the top and bottom of the Cover area.

## Props

<PropSelect options={space_options} name="coverSpace" bind:value={coverSpace} />
<PropSelect options={height_options} name="coverHeight" bind:value={coverHeight} />

Also `className`.

## Examples

<SqueezeContainer headline="Default">
	<Cover {coverSpace} {coverHeight}>
		<span class="item cover__centered">.cover__centered</span>
	</Cover>
</SqueezeContainer>

<SqueezeContainer headline="With three items">
	<Cover {coverSpace} {coverHeight}>
		<span class="item">Item</span>
		<span class="item cover__centered">.cover__centered</span>
		<span class="item">Item</span>
	</Cover>
</SqueezeContainer>
