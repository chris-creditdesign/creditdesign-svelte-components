<script lang="ts">
	import type { Space, Measure } from '$lib/types';
	import Switcher from '$lib/Switcher/index.svelte';
	import Stack from '$lib/Stack/index.svelte';
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
	import PropSelect from '$lib/PropSelect/index.svelte';

	import { space_options, measure_options } from '../../preview-content/options';

	let switcherSpace: Space = 'var(--s-1)';
	let switcherMinWidth: Measure = 'var(--measure-small)';
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

# Switcher

This is the maximum amount of items that can be arranged side by side.

## Props

<PropSelect options={space_options} name="switcherSpace" bind:value={switcherSpace} />
<PropSelect options={measure_options} name="switcherMinWidth" bind:value={switcherMinWidth} />

## Example

<SqueezeContainer headline="With seven items">
	<Switcher {switcherSpace} {switcherMinWidth}>
		<span class="item">One</span>
		<span class="item">Two</span>
		<span class="item">Three</span>
		<span class="item">Four</span>
		<span class="item">Five</span>
		<span class="item">Six</span>
		<span class="item">Seven</span>
	</Switcher>
</SqueezeContainer>
