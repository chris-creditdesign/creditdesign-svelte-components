<script lang="ts">
	import type { Space, Measure } from '$lib/types';
	import Grid from '$lib/Grid/index.svelte';
	import Stack from '$lib/Stack/index.svelte';
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
	import PropSelect from '$lib/PropSelect/index.svelte';

	import { measure_options, space_options } from '../../preview-content/options';

	let gridSpace: Space = 'var(--s-1)';
	let gridColumnSpace: Space = '';
	let gridRowSpace: Space = '';
	let minWidth: Measure = 'var(--measure-small)';
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
</style>

<Stack stackSpace="var(--s-2)">
	<h1>Grid</h1>

	<PropSelect options={space_options} name="gridSpace" bind:value={gridSpace} />
	<PropSelect options={space_options} name="gridColumnSpace" bind:value={gridColumnSpace} />
	<PropSelect options={space_options} name="gridRowSpace" bind:value={gridRowSpace} />
	<PropSelect options={measure_options} name="minWidth" bind:value={minWidth} />
</Stack>

<SqueezeContainer headline="Default">
	<Grid {gridSpace} {gridColumnSpace} {gridRowSpace} {minWidth}>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
	</Grid>
</SqueezeContainer>

<SqueezeContainer headline="Aria role list">
	<Grid {gridSpace} {gridColumnSpace} {gridRowSpace} {minWidth} list={true}>
		<li class="item">List item</li>
		<li class="item">List item</li>
		<li class="item">List item</li>
		<li class="item">List item</li>
		<li class="item">List item</li>
		<li class="item">List item</li>
		<li class="item">List item</li>
	</Grid>
</SqueezeContainer>
