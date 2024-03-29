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
	nav {
		max-width: none;
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

# Sidebar - with content

## Props

<PropSelect
	options={percent_options}
	name="sidebarContentMinWidth"
	bind:value={sidebarContentMinWidth}
/>
<PropBoolean name="sidebarOnRight" bind:value={sidebarOnRight} />
<PropSelect options={space_options} name="sidebarSpace" bind:value={sidebarSpace} />
<PropSelect options={measure_options} name="sidebarWidth" bind:value={sidebarWidth} />
<PropSelect options={align_items_options} name="alignItems" bind:value={alignItems} />

## Example

<SqueezeContainer>
	<Sidebar {sidebarContentMinWidth} {sidebarOnRight} {sidebarSpace} {sidebarWidth} {alignItems}>
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
