<script lang="ts">
	import type { Space } from '$lib/types';
	import Stack from '$lib/Stack/index.svelte';
	import Sidebar from "$lib/Sidebar/index.svelte";
	import Cover from "$lib/Cover/index.svelte";
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
	import PropSelect from '$lib/PropSelect/index.svelte';

	import { space_options } from '../../preview-content/options';

	let stackSpace: Space = 'var(--s-1)';
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

# Stack list

If the list property is true, a `ul` element will be rendered instead of the standard `div`.

```svelte
<Stack list={true}>
	<li>List item</li>
	<li>List item</li>
	<li>List item</li>
	...
</Stack>
```

results in:

```html
<ul class="stack">
	<li>List item</li>
	<li>List item</li>
	<li>List item</li>
	...
</ul>
```

## Props

<PropSelect options={space_options} name="stackSpace" bind:value={stackSpace} />

## Example

<SqueezeContainer>
	<Stack {stackSpace} list={true}>
		<li class="item">Item</li>
		<li class="item">Item</li>
		<li class="item">Item</li>
		<li class="item">Item</li>
		<li class="item">Item</li>
	</Stack>
</SqueezeContainer>
