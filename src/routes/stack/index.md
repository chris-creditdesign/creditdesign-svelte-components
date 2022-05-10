<script lang="ts">
	import type { Space } from '$lib/types';
	import Stack from '$lib/Stack/index.svelte';
	import Sidebar from "$lib/Sidebar/index.svelte";
	import Cover from "$lib/Cover/index.svelte";
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
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
</style>

# Stack

If flexbox gap is not supported, expects a `no-flexbox-gap` class to be applied to a parent element.

In this case the `stackSpace` becomes margins applied around the child elements.

A child element with the class `.margin-block-end:auto` or equivalent style applied will push items below it to the bottom of the container, if the `Stack` component is the only child of its parent.

## Usage

```svelte
<script>
	import { Stack } from 'creditdesign-svelte-components';
</script>

<Stack stackSpace="var(--s-1)" list={false} className="test">
	<span class="item">Item</span>
	<span class="item">Item</span>
	<span class="item">Item</span>
	...
</Stack>
```

## Props

| Property name | Default value |
| ------------- | ------------- |
| `stackSpace`  | `var(--s-1)`  |
| `list`        | `false`       |
| `className`   | `""`          |

## Default

<SqueezeContainer>
	<Stack>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
	</Stack>
</SqueezeContainer>
