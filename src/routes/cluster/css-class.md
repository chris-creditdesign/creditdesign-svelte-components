<script lang="ts">
	import type { Space, JustifyContent, AlignItems } from '$lib/types';
	import Cluster from '$lib/Cluster/index.svelte';
	import Stack from '$lib/Stack/index.svelte';
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
	import PropSelect from '$lib/PropSelect/index.svelte';

	import {
		space_options,
		justify_content_options,
		align_items_options
	} from '../../preview-content/options';

	let clusterSpace: Space = 'var(--s-1)';
	let clusterJustifyContent: JustifyContent = 'flex-start';
	let alignItems: AlignItems = 'center';
</script>

<style>
	.item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100px;
		height: 100px;
		background-color: lightblue;
	}
</style>

# Cluster - CSS class

Can also be applied as as standalone CSS class.

## Default

```html
<div class="cluster">
	<span class="item">Item</span>
	<span class="item">Item</span>
	<span class="item">Item</span>
	...
</div>
```

<SqueezeContainer>
	<div class="cluster">
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
	</div>
</SqueezeContainer>

## With CSS custom properties appiled

```html
<div
	class="cluster"
	style="--cluster-justify-content--component: flex-end; --cluster-space--component: var(--s2); align-items: baseline;"
>
	<span class="item">Item</span>
	<span class="item">Item</span>
	<span class="item">Item</span>
	...
</div>
```

<SqueezeContainer>
	<div class="cluster" style="--cluster-justify-content--component: flex-end; --cluster-space--component: var(--s2); align-items: baseline;">
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
	</div>
</SqueezeContainer>
