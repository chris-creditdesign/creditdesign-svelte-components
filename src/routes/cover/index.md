<script lang="ts">
	import type { Space, Height } from '$lib/types';
	import Cover from '$lib/Cover/index.svelte';
	import Stack from '$lib/Stack/index.svelte';
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
	import PropSelect from '$lib/PropSelect/index.svelte';
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

	.cover__centered {
		background-color: pink;
	}
</style>

# Cover

Centers an item vertically within a defined height.

Expects the item to be centered to have a `cover__centered` class applied.

Two additional items can be place before and after the centered element.
These will be displayed at the top and bottom of the Cover area.

## Usage

```svelte
<Cover coverSpace="var(--s-1)" coverHeight="100vh" className="test">
	<span>Item</span>
	<span class="cover__centered">.cover__centered</span>
	<span>Item</span>
</Cover>
```

## Props

| Property name | Default value |
| ------------- | ------------- |
| `coverSpace`  | `var(--s-1)`  |
| `coverHeight` | `100vh`       |
| `className`   | `""`          |

## Default

<SqueezeContainer>
	<Cover>
		<span class="item">Item</span>
		<span class="item cover__centered">.cover__centered</span>
		<span class="item">Item</span>
	</Cover>
</SqueezeContainer>
