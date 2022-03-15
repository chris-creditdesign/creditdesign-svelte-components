<script lang="ts">
	import type { Space, Measure } from '$lib/types';
	import Grid from '$lib/Grid/index.svelte';
	import Stack from '$lib/Stack/index.svelte';
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

# Grid

Grid layout that will adjust number columns depending on the space available.

The props `gridColumnSpace` and `gridRowSpace` can be used to define separate gutters widths between columns and rows.

This will only come into effect if `gridSpace` is not applied or is an empty string - otherwise the `gridSpace` value will be used.

## Usage

```svelte
<script>
	import { Grid } from 'creditdesign-svelte-components';
</script>

<Grid
	gridSpace="var(--s-1)"
	gridColumnSpace=""
	gridRowSpace=""
	minWidth="var(--measure-small)"
	list={false}
	className="test"
>
	<span>Item</span>
	<span>Item</span>
	<span>Item</span>
	...
</Grid>
```

## Props

| Property name     | Default value          |
| ----------------- | ---------------------- |
| `gridSpace`       | `var(--s-1)`           |
| `gridColumnSpace` | `""`                   |
| `gridRowSpace`    | `""`                   |
| `minWidth`        | `var(--measure-small)` |
| `list`            | `false`                |
| `className`       | `""`                   |

## Examples

<SqueezeContainer>
	<Grid>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
	</Grid>
</SqueezeContainer>
