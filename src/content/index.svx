<script>
	import Stack from "$lib/Stack/index.svelte";
</script>

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

It is first necessary to copy the global CSS file into your project, or to import import it into your Svelte layout, for instance with:

```js
import '..node_modules/creditdesign-svelte-components/index.css';
```

Then you can import each component into a Svelte app or componant as needed. For instance, you can import the `Box` and `Stack` components with:

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

Alternatively, the components can can be used as class names, applied to html elements:

```html
<div class="box stack">
	<p>Hello</p>
	<p>world</p>
</div>
```

Built by [Chris Ryan](https://www.creditdesign.co.uk/). Checkout this project on [GitHub](https://github.com/chris-creditdesign/creditdesign-svelte-components).
