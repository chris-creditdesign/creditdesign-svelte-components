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

	.item--outer {
		background-color: lightsalmon;
	}
</style>

# Cluster - with two cluster elements combinded

Here the 'Outer item' is in a separate `Cluster` so the Inner items, will wrap onto a new line first.

```svelte
<Cluster>
	<span>Outer item</span>
	<Cluster>
		<span>Inner item</span>
		<span>Inner item</span>
		<span>Inner item</span>
		...
	</Cluster>
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
		<span class="item item--outer">Outer item</span>
		<Cluster>
			<span class="item">Inner item</span>
			<span class="item">Inner item</span>
			<span class="item">Inner item</span>
			<span class="item">Inner item</span>
			<span class="item">Inner item</span>
			<span class="item">Inner item</span>
			<span class="item">Inner item</span>
		</Cluster>
	</Cluster>
</SqueezeContainer>
