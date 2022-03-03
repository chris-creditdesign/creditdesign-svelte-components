<script>
	import Stack from "$lib/Stack/index.svelte";
</script>

<style>
	h2 {
		margin-top: var(--s1);
	}
</style>

# Creditdesign Svelte Components

Welcome to `creditdesign-svelte-components`, a collection of [svelte](https://svelte.dev/) components used to build simple css layouts.

I'm using this project to put into practice the CSS I am learning from [Every Layout](https://every-layout.dev/) and to learn about [SvelteKit](https://kit.svelte.dev/).

I highly recommend you purchase Every Layout, as I'm probably making lots of silly mistakes here.

## Installation

To install the components from npm:

```bash
npm install --save-dev creditdesign-svelte-components
```

## Useage

Import each component into a svelte file with:

```js
import { Box, Stack } from 'creditdesign-svelte-components';
```

Then go ahead and use the components in your layout:

```svelte
<Box>
	<Stack>
		<p>Hello</p>
		<p>world</p>
	</Stack>
</Box>
```

## Load global CSS

The default styles for these components make use of the following css variables:

```css
:root {
	/* ------------------------------ Modular scale ----------------------------- */
	font-size: 1rem;

	/* Sizes to use */
	--ratio: 1.5;
	--s-6: calc(var(--s-5) / var(--ratio));
	--s-5: calc(var(--s-4) / var(--ratio));
	--s-4: calc(var(--s-3) / var(--ratio));
	--s-3: calc(var(--s-2) / var(--ratio));
	--s-2: calc(var(--s-1) / var(--ratio));
	--s-1: calc(var(--s0) / var(--ratio));
	--s0: 1rem;
	--s1: calc(var(--s0) * var(--ratio));
	--s2: calc(var(--s1) * var(--ratio));
	--s3: calc(var(--s2) * var(--ratio));
	--s4: calc(var(--s3) * var(--ratio));
	--s5: calc(var(--s4) * var(--ratio));
	--s6: calc(var(--s5) * var(--ratio));
	--s7: calc(var(--s6) * var(--ratio));
	--s8: calc(var(--s7) * var(--ratio));

	/* Useful to for fallback values */
	--no-space: 0;

	/* --------------------------------- Measure -------------------------------- */
	--measure: 60ch;
	--measure-big: calc(var(--measure) * var(--ratio));
	--measure-small: calc(var(--measure) / var(--ratio));

	/* --------------------------------- Spacing -------------------------------- */
	--space: var(--s-1);
	--cover-space: 1rem;
	--cover-height: 100vh;
}
```

Built by [Chris Ryan](https://www.creditdesign.co.uk/). Checkout this project on [GitHub](https://github.com/chris-creditdesign/creditdesign-svelte-components).
