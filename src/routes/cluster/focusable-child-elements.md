<script lang="ts">
	import type { Space, JustifyContent, AlignItems } from '$lib/types';
	import Cluster from '$lib/Cluster/index.svelte';
	import Stack from '$lib/Stack/index.svelte';
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
	import PropSelect from '$lib/PropSelect/index.svelte';

	import {
		space_options,
		justify_content_options,
		align_items_options
	} from '../../preview-content/options';

	let clusterSpace: Space = 'var(--s-1)';
	let clusterJustifyContent: JustifyContent = 'flex-start';
	let alignItems: AlignItems = 'center';
</script>

<style>
	.item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100px;
		height: 100px;
		background-color: lightblue;
	}
</style>

# Cluster - with focusable child elements

Using flexbox and the gap property ensures that the focus ring will not be clipped, as can happen when using negative margins.

## Props

<PropSelect options={space_options} name="clusterSpace" bind:value={clusterSpace} />

<PropSelect
	options={justify_content_options}
	name="clusterJustifyContent"
	bind:value={clusterJustifyContent}
/>
<PropSelect options={align_items_options} name="alignItems" bind:value={alignItems} />

## Example

<SqueezeContainer>
	<Cluster {clusterSpace} {clusterJustifyContent} {alignItems}>
		<a class="item" href="https://www.nature.com">Item</a>
		<a class="item" href="https://www.nature.com">Item</a>
		<a class="item" href="https://www.nature.com">Item</a>
		<a class="item" href="https://www.nature.com">Item</a>
		<a class="item" href="https://www.nature.com">Item</a>
		<a class="item" href="https://www.nature.com">Item</a>
		<a class="item" href="https://www.nature.com">Item</a>
	</Cluster>
</SqueezeContainer>
