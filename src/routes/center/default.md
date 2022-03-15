<script lang="ts">
	import type { Space, Measure } from '$lib/types';
	import Center from '$lib/Center/index.svelte';
	import Stack from '$lib/Stack/index.svelte';
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
	import PropSelect from '$lib/PropSelect/index.svelte';
	import PropBoolean from '$lib/PropBoolean/index.svelte';

	import { space_options, measure_options } from '../../preview-content/options';

	let centerSpace: Space = 'var(--s-1)';
	let centerMeasure: Measure = 'var(--measure)';
	let intrinsicallyCenter: boolean = false;
</script>

<style>
	.item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: none;
		min-height: 100px;
		padding: var(--s1);
		background-color: lightblue;
	}

	.item--small {
		max-width: max-content;
		background-color: lightgray;
	}
</style>

# Center

## Props

<PropSelect options={measure_options} name="centerMeasure" bind:value={centerMeasure} />
<PropSelect options={space_options} name="centerSpace" bind:value={centerSpace} />
<PropBoolean name="intrinsicallyCenter" bind:value={intrinsicallyCenter} />

## Example

<SqueezeContainer>
	<Center {centerSpace} {centerMeasure} {intrinsicallyCenter}>
		<span class="item">Item</span>
	</Center>
</SqueezeContainer>
