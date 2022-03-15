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

	.item--short {
		height: 50px;
	}

	.item--tall {
		height: 150px;
	}

	.item--outer {
		background-color: lightsalmon;
	}

	.cluster__grow {
		background-color: pink;
	}

	:global(.test) {
		border: 1px solid red;
	}
</style>

# Cluster - with a `cluster__grow` child element

Here a child element with the class `cluster__grow` applied will will have a `flex-grow` property of 2 - causing it to grow to stretch horizontally to fill the available space.

```svelte
<Cluster>
	<span class="cluster__grow">.cluster__grow</span>
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
		<span class="item cluster__grow">.cluster__grow</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
	</Cluster>
</SqueezeContainer>
