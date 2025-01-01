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
	
	
	
	interface Props {
		/**
	 * Max width of the main content column.
	 */
		fullBleedMeasure?: Measure;
		/**
	 * Padding left and right.
	 */
		fullBleedSideSpace?: Space;
		/**
	 * Vertical space between content items.
	 */
		fullBleedStackSpace?: Space;
		className?: string;
		children?: import('svelte').Snippet;
	}

	let {
		fullBleedMeasure = '',
		fullBleedSideSpace = '',
		fullBleedStackSpace = '',
		className = '',
		children
	}: Props = $props();

	let fullBleedMeasureComponent =
		$derived(fullBleedMeasure.length > 0 ? `--full-bleed-measure--component: ${fullBleedMeasure};` : '');
	let fullBleedSideSpaceComponent =
		$derived(fullBleedSideSpace.length > 0
			? `--full-bleed-side-space--component: ${fullBleedSideSpace};`
			: '');
	let fullBleedStackSpaceComponent =
		$derived(fullBleedStackSpace.length > 0
			? `--full-bleed-stack-space--component: ${fullBleedStackSpace};`
			: '');
</script>

<div
	class={`full-bleed ${className}`}
	style={`${fullBleedMeasureComponent} ${fullBleedSideSpaceComponent} ${fullBleedStackSpaceComponent}`}
>
	{@render children?.()}
</div>
