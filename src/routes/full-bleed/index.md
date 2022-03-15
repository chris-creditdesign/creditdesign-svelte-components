<script lang="ts">
	import type { Space, Measure } from '$lib/types';
	import FullBleed from '$lib/FullBleed/index.svelte';
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
</script>

<style>
	span {
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: none;
		min-height: 100px;
		background-color: lightblue;
	}

	span:nth-child(2n) {
		background-color: pink;
	}

	img {
		max-width: 100%;
	}
</style>

# FullBleed

Creates a centered 'tube of content' with options for elements to break the column
srpead out to the left and right.

Available classes for child elements are:

- `full-bleed`
- `full-bleed--2`
- `full-bleed--3`
- `full-bleed--4`
- `full-bleed--left`
- `full-bleed--left--2`
- `full-bleed--left--3`
- `full-bleed--left--4`
- `full-bleed--right`
- `full-bleed--right--2`
- `full-bleed--right--3`
- `full-bleed--right--4`

## Usage

```svelte
<script>
	import { FullBleed } from 'creditdesign-svelte-components';
</script>

<FullBleed>
	<span class="full-bleed">.full-bleed</span>
	<span>Item</span>
	<span class="full-bleed--2">.full-bleed--2</span>
	...
</FullBleed>
```

## Props

| Property name         | Default value    |
| --------------------- | ---------------- |
| `fullBleedMeasure`    | `var(--measure)` |
| `fullBleedSideSpace`  | `var(--s-1)`     |
| `fullBleedStackSpace` | `var(--s-1)`     |
| `className`           | `""`             |

## Default

<SqueezeContainer>
	<FullBleed>
		<span>Item</span>
		<span class="full-bleed">.full-bleed</span>
		<span>Item</span>
		<span class="full-bleed--2">.full-bleed--2</span>
		<span>Item</span>
		<span class="full-bleed--3">.full-bleed--3</span>
		<span>Item</span>
		<span class="full-bleed--4">.full-bleed--4</span>
		<span>Item</span>
		<span class="full-bleed--left">.full-bleed--left</span>
		<span>Item</span>
		<span class="full-bleed--left-2">.full-bleed--left-2</span>
		<span>Item</span>
		<span class="full-bleed--left-3">.full-bleed--left-3</span>
		<span>Item</span>
		<span class="full-bleed--left-4">.full-bleed--left-4</span>
		<span>Item</span>
		<span class="full-bleed--right">.full-bleed--right</span>
		<span>Item</span>
		<span class="full-bleed--right-2">.full-bleed--right-2</span>
		<span>Item</span>
		<span class="full-bleed--right-3">.full-bleed--right-3</span>
		<span>Item</span>
		<span class="full-bleed--right-4">.full-bleed--right-4</span>
		<span>Item</span>
	</FullBleed>
</SqueezeContainer>
