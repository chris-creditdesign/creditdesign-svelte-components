<script lang="ts">
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
</script>

<style>
	span {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: none;
		height: 100px;
		background-color: lightblue;
	}
</style>

# Box - CSS class

Can also be applied as a standalone css class.

## Default

```html
<div class="box">
	<span>Item</span>
</div>
```

<SqueezeContainer>
	<div class="box"><span>Item</span></div>
</SqueezeContainer>

## With CSS custom property appiled

```html
<div class="box" style="--box-space--component: var(--s2)">
	<span>Item</span>
</div>
```

<SqueezeContainer>
	<div class="box" style="--box-space--component: var(--s2)"><span>Item</span></div>
</SqueezeContainer>
