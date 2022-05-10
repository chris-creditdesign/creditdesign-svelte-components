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
		min-height: 100px;
		padding: var(--s1);
		background-color: lightblue;
	}

	.item--small {
		max-width: max-content;
		background-color: lightgray;
	}
</style>

# Center - CSS class

Can also be applied as as standalone CSS class.

## Default

```html
<div class="center">
	<span class="item">Item</span>
</div>
```

<SqueezeContainer>
	<div class="center">
		<span class="item">Item</span>
	</div>
</SqueezeContainer>

## With CSS custom properties appiled

```html
<div
	class="center"
	style="--center-space--component: var(--s2); --center-measure--component: var(--measure-big);"
>
	<span class="item">Item</span>
</div>
```

<SqueezeContainer>
	<div class="center" style="--center-space--component: var(--s2); --center-measure--component: var(--measure-big);">
		<span class="item">Item</span>
	</div>
</SqueezeContainer>

## Intrinsically centered

With `.intrinsically-center` class apllied.

```html
<div class="center intrinsically-center">
	<span class="item">Item</span>
	<span class="item">Item</span>
	<span class="item item--small">Small item</span>
	<span class="item">Item</span>
	<span class="item">Item</span>
</div>
```

<SqueezeContainer>
	<div class="center intrinsically-center">
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item item--small">Small item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
	</div>
</SqueezeContainer>
