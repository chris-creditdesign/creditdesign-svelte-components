<script lang="ts">
	import type { Space, Measure } from '$lib/types';
	import Center from '$lib/Center/index.svelte';
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
</script>

<style>
	.item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: none;
		min-height: 100px;
		padding: var(--s1);
		background-color: lightblue;
	}

	.item--small {
		max-width: max-content;
		background-color: lightgray;
	}
</style>

# Center

Simple component used to horizontally center its contents.

## Usage

```svelte
<script>
	import { Center } from 'creditdesign-svelte-components';
</script>

<Center
	centerSpace="var(--s-1)"
	centerMeasure="var(--measure)"
	intrinsicallyCenter={false}
	className="test"
>
	<span class="item">Item</span>
</Center>
```

## Props

| Property name         | Default value    |
| --------------------- | ---------------- |
| `boxSpace`            | `var(--s-1)`     |
| `centerMeasure`       | `var(--measure)` |
| `intrinsicallyCenter` | `false`          |
| `className`           | `""`             |

## Default

<SqueezeContainer>
	<Center>
		<span class="item">Item</span>
	</Center>
</SqueezeContainer>
