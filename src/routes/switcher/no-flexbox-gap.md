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

# Switcher - no flexbox gap

If the flexbox gap property is not supported, this component expects a class of `no-flexbox-gap` to be applied to a parent element - probably the `body` or `html` elements.

In this case the `switcherSpace` property will be applied as margin around each child element.

```svelte
<body class="no-flexbox-gap">
	<Switcher>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		...
	</Switcher>
</body>
```

## Props

<PropSelect options={space_options} name="switcherSpace" bind:value={switcherSpace} />
<PropSelect options={measure_options} name="switcherMinWidth" bind:value={switcherMinWidth} />

## Example

<SqueezeContainer headline="With no flexbox gap">
	<div class="no-flexbox-gap">
		<Switcher {switcherSpace} {switcherMinWidth}>
			<span class="item">Item</span>
			<span class="item">Item</span>
			<span class="item">Item</span>
		</Switcher>
	</div>
</SqueezeContainer>
