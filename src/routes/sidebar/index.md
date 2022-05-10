<script lang="ts">
	import type { Space, PercentWidth, AlignItems, Measure } from '$lib/types';
	import Sidebar from '$lib/Sidebar/index.svelte';
	import Stack from '$lib/Stack/index.svelte';
	import Cluster from '$lib/Cluster/index.svelte';
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
	import PropSelect from '$lib/PropSelect/index.svelte';
	import PropBoolean from '$lib/PropBoolean/index.svelte';

	import {
		space_options,
		percent_options,
		measure_options,
		align_items_options
	} from '../../preview-content/options';

	let sidebarContentMinWidth: PercentWidth = '75%';
	let sidebarOnRight: boolean = false;
	let sidebarSpace: Space = 'var(--s-1)';
	let sidebarWidth: Measure = 'inherit';
	let alignItems: AlignItems = 'stretch';
</script>

<style>
	.sidebar__main-content, .sidebar__content {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 100px;
		max-width: none;
		background-color: lightblue;
	}

	.sidebar__main-content {
		height: 50vh;
	}

	.sidebar__content {
		min-height: 100px;
		background-color: pink;
	}
</style>

# Sidebar

Sidebar content will be placed below or above the main content at the minimum width.

Expects only two child elements, slots for `main-content` and `sidebar`. Use `<svelte:fragment>` elements
to avoid adding extra wrapper divs to the rendered html. ie:

```svelte
<svelte:fragment slot="sidebar">...</svelte:fragment>

<svelte:fragment slot="main-content">...</svelte:fragment>
```

If flexbox gap is not supported, expects a `no-flexbox-gap` class to be applied to a parent element.

In this case `sidebarSpace` is applied as as padding around the `.main-content` and `.sidebar` elements.

## Usage

```svelte
<script>
	import { Sidebar } from 'creditdesign-svelte-components';
</script>

<Sidebar
	sidebarContentMinWidth="75%"
	sidebarOnRight={false}
	sidebarSpace="var(--s-1)"
	sidebarWidth="inherit"
	alignItems="stretch"
	className="test"
>
	<svelte:fragment slot="sidebar">
		<div>Sidebar</div>
	</svelte:fragment>
	<svelte:fragment slot="main-content">
		<div>Main content</div>
	</svelte:fragment>
</Sidebar>
```

## Props

| Property name            | Default value |
| ------------------------ | ------------- |
| `sidebarContentMinWidth` | `75%`         |
| `sidebarOnRight`         | `false`       |
| `sidebarSpace`           | `var(--s-1)`  |
| `sidebarWidth`           | `inherit`     |
| `alignItems`             | `stretch`     |
| `className`              | `""`          |

## Examples

<SqueezeContainer>
	<Sidebar>
		<svelte:fragment slot="sidebar">
			<div class="sidebar__content">Sidebar</div>
		</svelte:fragment>
		<svelte:fragment slot="main-content">
			<div class="sidebar__main-content">Main content</div>
		</svelte:fragment>
	</Sidebar>
</SqueezeContainer>
