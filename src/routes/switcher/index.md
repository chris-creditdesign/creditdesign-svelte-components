<script lang="ts">
	import type { Space, Measure } from '$lib/types';
	import Switcher from '$lib/Switcher/index.svelte';
	import Stack from '$lib/Stack/index.svelte';
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
	import PropSelect from '$lib/PropSelect/index.svelte';

	import { space_options, measure_options } from '../../preview-content/options';

	let switcherSpace: Space = 'var(--s-1)';
	let switcherMinWidth: Measure = 'var(--measure-small)';
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

# Switcher

Will switch from a column to a stacked layout below a minimum width.

If more than seven child elements, the stacked layout is applied automatically.

If flexbox gap is not supported, expects a `.no-flexbox-gap` class to be applied to a parent element.

In this case `switcherSpace` is applied as as padding around the child elements.

## Props

| Property name      | Default prop     |
| ------------------ | ---------------- |
| `switcherSpace`    | `var(--s-1)`     |
| `switcherMinWidth` | `var(--measure)` |
| `list`             | `false`          |
| `className`        | `""`             |

## Default

<SqueezeContainer headline="Default">
	<Switcher {switcherSpace} {switcherMinWidth}>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
	</Switcher>
</SqueezeContainer>
