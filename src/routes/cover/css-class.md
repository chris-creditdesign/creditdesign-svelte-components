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

	.cover__centered {
		background-color: pink;
	}
</style>

# Cover - CSS class

Can also be applied as as standalone CSS class.

## Default

```html
<div class="cover">
	<span class="item">Item</span>
	<span class="item cover__centered">.cover__centered</span>
	<span class="item">Item</span>
</div>
```

<SqueezeContainer>
	<div class="cover">
		<span class="item">Item</span>
		<span class="item cover__centered">.cover__centered</span>
		<span class="item">Item</span>
	</div>
</SqueezeContainer>

## With CSS custom properties appiled

```html
<div class="cover" style="--cover-space--component: var(--s2); --cover-height--component: 50vh;">
	<span class="item">Item</span>
	<span class="item cover__centered">.cover__centered</span>
	<span class="item">Item</span>
</div>
```

<SqueezeContainer>
	<div class="cover" style="--cover-space--component: var(--s2); --cover-height--component: 50vh;">
		<span class="item">Item</span>
		<span class="item cover__centered">.cover__centered</span>
		<span class="item">Item</span>
	</div>
</SqueezeContainer>
