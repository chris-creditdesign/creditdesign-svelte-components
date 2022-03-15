<script lang="ts">
	import type { Space } from '$lib/types';
	import Box from '$lib/Box/index.svelte';
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
</script>

<style>
	span {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: none;
		height: 100px;
		background-color: lightblue;
	}
</style>

# Box

Simple component used to add padding around its contents.

## Usage

```svelte
<script>
	import { Box } from 'creditdesign-svelte-components';
</script>

<Box boxSpace="var(--s-1)" className="test">
	<span>Item</span>
</Box>
```

## Props

| Property name | Default value |
| ------------- | ------------- |
| `boxSpace`    | `var(--s-1)`  |
| `className`   | `""`          |

## Default

<SqueezeContainer headline="Default">
	<Box><span>Item</span></Box>
</SqueezeContainer>
