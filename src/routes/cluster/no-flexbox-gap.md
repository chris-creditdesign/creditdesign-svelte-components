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

# Cluster - with no flexbox gap

If the flexbox gap property is not supported, this component expects a class of `no-flexbox-gap` to be applied to a parent element - probably the `body` or `html` elements.

In this case the `clusterSpace` property will be applied as margin around each child element.

```svelte
<body class="no-flexbox-gap">
	<Cluster>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		...
	</Cluster>
</body>
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
	<div class="no-flexbox-gap">
		<Cluster {clusterSpace} {clusterJustifyContent} {alignItems}>
			<span class="item">Item</span>
			<span class="item">Item</span>
			<span class="item">Item</span>
			<span class="item">Item</span>
			<span class="item">Item</span>
			<span class="item">Item</span>
			<span class="item">Item</span>
		</Cluster>
	</div>
</SqueezeContainer>
