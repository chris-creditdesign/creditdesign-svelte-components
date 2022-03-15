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
	span {
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

	.item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: none;
		height: 100px;
		background-color: lightblue;
	}
</style>

# Sidebar - with no flexbox gap

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

## Example

<SqueezeContainer>
	<div class="no-flexbox-gap">
		<Sidebar {sidebarContentMinWidth} {sidebarOnLeft} {sidebarSpace} {sidebarWidth} {alignItems}>
			<svelte:fragment slot="sidebar">
				<span class="sidebar__content">Sidebar</span>
			</svelte:fragment>
			<svelte:fragment slot="main-content">
				<span class="sidebar__main-content">Main content</span>
			</svelte:fragment>
		</Sidebar>
	</div>
</SqueezeContainer>
