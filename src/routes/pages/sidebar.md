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
	let sidebarOnLeft: boolean = true;
	let sidebarSpace: Space = 'var(--s-1)';
	let sidebarWidth: Measure = 'inherit';
	let alignItems: AlignItems = 'stretch';
</script>

<style>
	h2 {
		margin-top: var(--s1);
	}

	span {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 100px;
		max-width: none;
		background-color: lightblue;
	}

	nav {
		max-width: none;
	}

	.sidebar__main-content {
		height: 100vh;
	}

	.sidebar__content {
		min-height: 100px;
		background-color: pink;
	}

	.item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: none;
		height: 100px;
		background-color: lightblue;
	}

	.list-item {
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: none;
		height: 50px;
		padding: var(--s-1);
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

## Props

<PropSelect
	options={percent_options}
	name="sidebarContentMinWidth"
	bind:value={sidebarContentMinWidth}
/>
<PropBoolean name="sidebarOnLeft" bind:value={sidebarOnLeft} />
<PropSelect options={space_options} name="sidebarSpace" bind:value={sidebarSpace} />
<PropSelect options={measure_options} name="sidebarWidth" bind:value={sidebarWidth} />
<PropSelect options={align_items_options} name="alignItems" bind:value={alignItems} />

Also `className`.

## Examples

<SqueezeContainer headline="Default">
	<Sidebar {sidebarContentMinWidth} {sidebarOnLeft} {sidebarSpace} {sidebarWidth} {alignItems}>
		<svelte:fragment slot="sidebar">
			<span class="sidebar__content">Sidebar</span>
		</svelte:fragment>
		<svelte:fragment slot="main-content">
			<span class="sidebar__main-content">Main content</span>
		</svelte:fragment>
	</Sidebar>
</SqueezeContainer>

<SqueezeContainer headline="With content">
	<Sidebar {sidebarContentMinWidth} {sidebarOnLeft} {sidebarSpace} {sidebarWidth} {alignItems}>
		<svelte:fragment slot="sidebar">
			<nav>
				<Cluster list={true}>
					<li>
						<a href="https://www.nature.com" class="list-item">Sidebar item</a>
					</li>
					<li>
						<a href="https://www.nature.com" class="list-item">Sidebar item</a>
					</li>
					<li>
						<a href="https://www.nature.com" class="list-item">Sidebar item</a>
					</li>
					<li>
						<a href="https://www.nature.com" class="list-item">Sidebar item</a>
					</li>
					<li>
						<a href="https://www.nature.com" class="list-item">Sidebar item</a>
					</li>
				</Cluster>
			</nav>
		</svelte:fragment>
		<svelte:fragment slot="main-content">
			<Stack>
				<span class="item">Item</span>
				<span class="item">Item</span>
				<span class="item">Item</span>
				<span class="item">Item</span>
				<span class="item">Item</span>
			</Stack>
		</svelte:fragment>
	</Sidebar>
</SqueezeContainer>

<SqueezeContainer headline="With no flexbox gap">
	<div class="no-flexbox-gap">
		<Sidebar {sidebarContentMinWidth} {sidebarOnLeft} {sidebarSpace} {sidebarWidth} {alignItems}>
			<svelte:fragment slot="sidebar"><span class="sidebar__content">Sidebar</span></svelte:fragment
			>
			<svelte:fragment slot="main-content">
				<span class="sidebar__main-content">Main content</span>
			</svelte:fragment>
		</Sidebar>
	</div>
</SqueezeContainer>
