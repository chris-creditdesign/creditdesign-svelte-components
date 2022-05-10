<script lang="ts">
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
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

# Grid - CSS class

Can also be applied as as standalone CSS class. In this instance there is no corresponding custom property for the `gridSpace` Svelte component prop. `--grid-column-space--component` `--grid-row-space--component` will need to be defined independently.

## Default

```html
<div class="grid">
	<span class="item">Item</span>
	<span class="item">Item</span>
	...
</div>
```

<SqueezeContainer>
	<div class="grid">
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
	class="grid"
	style="--grid-min-width--component: var(--measure); --grid-column-space--component: var(--s4); --grid-row-space--component: var(--s2);"
>
	<span class="item">Item</span>
	<span class="item">Item</span>
	...
</div>
```

<SqueezeContainer>
	<div class="grid" style="--grid-min-width--component: var(--measure); --grid-column-space--component: var(--s4); --grid-row-space--component: var(--s2);">
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
	</div>
</SqueezeContainer>
