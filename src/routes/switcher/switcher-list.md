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

# Switcher list

If the list property is true, a `ul` element will be rendered instead of the standard `div`.

```svelte
<Switcher list={true}>
	<li>List item</li>
	<li>List item</li>
	<li>List item</li>
	...
</Switcher>
```

results in:

```html
<ul class="switcher">
	<li>List item</li>
	<li>List item</li>
	<li>List item</li>
	...
</ul>
```

## Props

<PropSelect options={space_options} name="switcherSpace" bind:value={switcherSpace} />
<PropSelect options={measure_options} name="switcherMinWidth" bind:value={switcherMinWidth} />

## Example

<SqueezeContainer>
	<Switcher {switcherSpace} {switcherMinWidth} list={true}>
		<li class="item">Item</li>
		<li class="item">Item</li>
		<li class="item">Item</li>
	</Switcher>
</SqueezeContainer>
