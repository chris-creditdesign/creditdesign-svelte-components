<script lang="ts">
	import type { Space, JustifyContent, AlignItems } from '$lib/types';
	import Cluster from '$lib/Cluster/index.svelte';
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
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

# Cluster

Used to cluster child elements in a wrap-able horizontal row.

Adding a `.cluster__grow` class to a child element will cause it to stretch to fill available space.

If flexbox gap is not supported, expects a `.no-flexbox-gap` class to be applied to a parent element.
In this case the `clusterSpace` prop is applied as as padding around the child elements.

## Useage

```svelte
<script>
	import { Cluster } from 'creditdesign-svelte-components';
</script>

<Cluster
	clusterSpace="var(--s-1)"
	clusterJustifyContent="flex-start"
	alignItems="center"
	list={false}
	className="test"
>
	<span>Item</span>
	<span>Item</span>
	<span>Item</span>
	...
</Cluster>
```

## Props

| Property name           | Default value |
| ----------------------- | ------------- |
| `clusterSpace`          | `var(--s-1)`  |
| `clusterJustifyContent` | `flex-start`  |
| `alignItems`            | `center`      |
| `list`                  | `false`       |
| `className`             | `""`          |

## Default

<SqueezeContainer headline="Default">
	<Cluster>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
	</Cluster>
</SqueezeContainer>
