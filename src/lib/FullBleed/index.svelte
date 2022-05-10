<!--
@component

Creates a centered 'tube of content' with options for elements to break the column
srpead out to the left and right.

Available classes for child elements are:

- `full-bleed--1`
- `full-bleed--2`
- `full-bleed--3`
- `full-bleed--4`
- `full-bleed--left`
- `full-bleed--left--2`
- `full-bleed--left--3`
- `full-bleed--left--4`
- `full-bleed--right`
- `full-bleed--right--2`
- `full-bleed--right--3`
- `full-bleed--right--4`
-->
<script lang="ts">
	import type { Space, Measure } from '../types';
	/**
	 * Max width of the main content column.
	 */
	export let fullBleedMeasure: Measure = '';
	/**
	 * Padding left and right.
	 */
	export let fullBleedSideSpace: Space = '';
	/**
	 * Vertical space between content items.
	 */
	export let fullBleedStackSpace: Space = '';
	export let className = '';

	$: fullBleedMeasureComponent =
		fullBleedMeasure.length > 0 ? `--full-bleed-measure--component: ${fullBleedMeasure};` : '';
	$: fullBleedSideSpaceComponent =
		fullBleedSideSpace.length > 0
			? `--full-bleed-side-space--component: ${fullBleedSideSpace};`
			: '';
	$: fullBleedStackSpaceComponent =
		fullBleedStackSpace.length > 0
			? `--full-bleed-stack-space--component: ${fullBleedStackSpace};`
			: '';
</script>

<div
	class={`full-bleed ${className}`}
	style={`${fullBleedMeasureComponent} ${fullBleedSideSpaceComponent} ${fullBleedStackSpaceComponent}`}
>
	<slot />
</div>
