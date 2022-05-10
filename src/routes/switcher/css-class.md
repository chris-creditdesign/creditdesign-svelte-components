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

# Switcher - CSS class

Can also be applied as as standalone CSS class.

## Default

```html
<div class="switcher">
	<span class="item">Item</span>
	<span class="item">Item</span>
	<span class="item">Item</span>
</div>
```

<SqueezeContainer>
	<div class="switcher">
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
	</div>
</SqueezeContainer>

## With CSS custom properties appiled

```html
<div
	class="switcher"
	style="--switcher-min-width--component: var(--measure-big); --switcher-space--component: var(--s2);"
>
	<span class="item">Item</span>
	<span class="item">Item</span>
	<span class="item">Item</span>
</div>
```

<SqueezeContainer>
	<div class="switcher" style="--switcher-min-width--component: var(--measure-big); --switcher-space--component: var(--s2);">
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
	</div>
</SqueezeContainer>
