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

# Cluster list

If the list property is true, a `ul` element will be rendered instead of the standard `div`.

```svelte
<Cluster list={true}>
	<li>List item</li>
	<li>List item</li>
	<li>List item</li>
	...
</Cluster>
```

results in:

```html
<ul class="cluster">
	<li>List item</li>
	<li>List item</li>
	<li>List item</li>
	...
</ul>
```

## Props

<PropSelect options={space_options} name="clusterSpace" bind:value={clusterSpace} />

<PropSelect
	options={justify_content_options}
	name="clusterJustifyContent"
	bind:value={clusterJustifyContent}
/>
<PropSelect options={align_items_options} name="alignItems" bind:value={alignItems} />

## Example

<SqueezeContainer>
	<Cluster {clusterSpace} {clusterJustifyContent} {alignItems} list={true}>
		<li class="item">List item</li>
		<li class="item">List item</li>
		<li class="item">List item</li>
		<li class="item">List item</li>
		<li class="item">List item</li>
		<li class="item">List item</li>
		<li class="item">List item</li>
	</Cluster>
</SqueezeContainer>

## Stack of Cluster lists

<SqueezeContainer>
<Stack stackSpace="var(--s2)">
<Cluster {clusterSpace} {clusterJustifyContent} {alignItems} list={true}>
	<li class="item">List item</li>
	<li class="item">List item</li>
	<li class="item">List item</li>
	<li class="item">List item</li>
	<li class="item">List item</li>
	<li class="item">List item</li>
	<li class="item">List item</li>
</Cluster>

<Cluster {clusterSpace} {clusterJustifyContent} {alignItems} list={true}>

<li class="item">List item</li>
<li class="item">List item</li>
<li class="item">List item</li>
<li class="item">List item</li>
<li class="item">List item</li>
<li class="item">List item</li>
<li class="item">List item</li>

</Cluster>

<Cluster {clusterSpace} {clusterJustifyContent} {alignItems} list={true}>

<li class="item">List item</li>
<li class="item">List item</li>
<li class="item">List item</li>
<li class="item">List item</li>
<li class="item">List item</li>
<li class="item">List item</li>
<li class="item">List item</li>

</Cluster>

</Stack>
</SqueezeContainer>
