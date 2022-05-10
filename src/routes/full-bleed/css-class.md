<script lang="ts">
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
</script>

<style>
	img {
		max-width: 100%;
	}
</style>

# FullBleed - CSS class

Can also be applied as as standalone CSS class.

## Default

```html
<div class="full-bleed">
	<p>...</p>
	<img class="full-bleed--4" src="/img/image.jpg" alt="Test." />
	<p>...</p>
	<p>...</p>
</div>
```

<SqueezeContainer>
	<div class="full-bleed">
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo vitae explicabo quam
			reprehenderit. Atque autem, aspernatur facilis dolorum, nisi, eum ipsa illum mollitia sed at
			laudantium quas voluptatem incidunt qui?
		</p>
		<img class="full-bleed--4" src="/img/image.jpg" alt="Test." />
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo vitae explicabo quam
			reprehenderit. Atque autem, aspernatur facilis dolorum, nisi, eum ipsa illum mollitia sed at
			laudantium quas voluptatem incidunt qui?
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo vitae explicabo quam
			reprehenderit. Atque autem, aspernatur facilis dolorum, nisi, eum ipsa illum mollitia sed at
			laudantium quas voluptatem incidunt qui?
		</p>
	</div>
</SqueezeContainer>

## With CSS custom properties appiled

```html
<div
	class="full-bleed"
	style="--full-bleed-measure--component: var(--measure-small); --full-bleed-side-space--component: var(--s2); --full-bleed-stack-space--component: var(--s2);"
>
	<p>...</p>
	<img class="full-bleed--4" src="/img/image.jpg" alt="Test." />
	<p>...</p>
	<p>...</p>
</div>
```

<SqueezeContainer>
	<div class="full-bleed" style="--full-bleed-measure--component: var(--measure-small); --full-bleed-side-space--component: var(--s2); --full-bleed-stack-space--component: var(--s2);">
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo vitae explicabo quam
			reprehenderit. Atque autem, aspernatur facilis dolorum, nisi, eum ipsa illum mollitia sed at
			laudantium quas voluptatem incidunt qui?
		</p>
		<img class="full-bleed--4" src="/img/image.jpg" alt="Test." />
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo vitae explicabo quam
			reprehenderit. Atque autem, aspernatur facilis dolorum, nisi, eum ipsa illum mollitia sed at
			laudantium quas voluptatem incidunt qui?
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo vitae explicabo quam
			reprehenderit. Atque autem, aspernatur facilis dolorum, nisi, eum ipsa illum mollitia sed at
			laudantium quas voluptatem incidunt qui?
		</p>
	</div>
</SqueezeContainer>
