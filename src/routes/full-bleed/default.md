<script lang="ts">
	import type { Space, Measure } from '$lib/types';
	import FullBleed from '$lib/FullBleed/index.svelte';
	import Stack from '$lib/Stack/index.svelte';
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
	import PropSelect from '$lib/PropSelect/index.svelte';
	import { space_options, measure_options } from '../../preview-content/options';

	let fullBleedMeasure: Measure = 'var(--measure)';
	let fullBleedSideSpace: Space = 'var(--s-1)';
	let fullBleedStackSpace: Space = 'var(--s-1)';
</script>

<style>
	span {
		display: flex;
		align-items: center;
		justify-content: center;
		max-width: none;
		min-height: 100px;
		background-color: lightblue;
	}

	span:nth-child(2n) {
		background-color: pink;
	}
</style>

# FullBleed

## Props

<PropSelect options={measure_options} name={'fullBleedMeasure'} bind:value={fullBleedMeasure} />
<PropSelect options={space_options} name={'fullBleedSideSpace'} bind:value={fullBleedSideSpace} />
<PropSelect
options={space_options}
name={'fullBleedStackSpace'}
bind:value={fullBleedStackSpace}
/>

## Example

<SqueezeContainer>
	<FullBleed {fullBleedMeasure} {fullBleedSideSpace} {fullBleedStackSpace}>
		<span>Item</span>
		<span class="full-bleed--1">.full-bleed</span>
		<span>Item</span>
		<span class="full-bleed--2">.full-bleed--2</span>
		<span>Item</span>
		<span class="full-bleed--3">.full-bleed--3</span>
		<span>Item</span>
		<span class="full-bleed--4">.full-bleed--4</span>
		<span>Item</span>
		<span class="full-bleed--left">.full-bleed--left</span>
		<span>Item</span>
		<span class="full-bleed--left-2">.full-bleed--left-2</span>
		<span>Item</span>
		<span class="full-bleed--left-3">.full-bleed--left-3</span>
		<span>Item</span>
		<span class="full-bleed--left-4">.full-bleed--left-4</span>
		<span>Item</span>
		<span class="full-bleed--right">.full-bleed--right</span>
		<span>Item</span>
		<span class="full-bleed--right-2">.full-bleed--right-2</span>
		<span>Item</span>
		<span class="full-bleed--right-3">.full-bleed--right-3</span>
		<span>Item</span>
		<span class="full-bleed--right-4">.full-bleed--right-4</span>
		<span>Item</span>
	</FullBleed>
</SqueezeContainer>
