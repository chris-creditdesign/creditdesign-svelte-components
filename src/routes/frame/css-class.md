<script lang="ts">
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
</script>

# Frame - CSS class

Can also be applied as as standalone CSS class.

## Default

```html
<div class="frame">
	<img src="/img/image.jpg" alt="Test." />
</div>
```

<SqueezeContainer>
	<div class="frame">
		<img src="/img/image.jpg" alt="Test." />
	</div>
</SqueezeContainer>

## With CSS custom properties appiled

```html
<div class="frame" style="--frame-ratio-height--component: 2; --frame-ratio-width--component: 8;">
	<img src="/img/image.jpg" alt="Test." />
</div>
```

<SqueezeContainer>
	<div class="frame" style="--frame-ratio-height--component: 2; --frame-ratio-width--component: 8;">
		<img src="/img/image.jpg" alt="Test." />
	</div>
</SqueezeContainer>
