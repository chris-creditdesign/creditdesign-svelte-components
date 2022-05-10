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

	.flex-grow\:2 {
		background-color: pink;
	}
</style>

# Cluster - with a flex grow child element

Here a child element with the class `.flex-grow:2` applied will will have a `flex-grow` property of 2 - causing it to grow to stretch horizontally to fill the available space.

```svelte
<Cluster>
	<span class="flex-grow:2">.flex-grow:2</span>
	<span>Item</span>
	<span>Item</span>
	<span>Item</span>
	...
</Cluster>
```

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
		<span class="item flex-grow:2">.flex-grow:2</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
	</Cluster>
</SqueezeContainer>
