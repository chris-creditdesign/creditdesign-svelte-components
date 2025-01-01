<!--
@component

Centers an item vertically within a defined height.

Expects the item to be centered to have a `cover__centered` class applied.

Two additional items can be place before and after the centered element.
These will be displayed at the top and bottom of the Cover area.
-->
<script lang="ts">
	import type { Height, Space } from '../types';

	
	
	interface Props {
		/**
	 * Height of the Cover element.
	 */
		coverHeight?: Height;
		/**
	 * Padding within the Cover element - pushes the content away from its edges.
	 */
		coverSpace?: Space;
		className?: string;
		children?: import('svelte').Snippet;
	}

	let {
		coverHeight = '',
		coverSpace = '',
		className = '',
		children
	}: Props = $props();

	let coverHeightComponent =
		$derived(coverHeight.length > 0 ? `--cover-height--component: ${coverHeight};` : '');
	let coverSpaceComponent = $derived(coverSpace.length > 0 ? `--cover-space--component: ${coverSpace};` : '');
</script>

<div class={`cover ${className}`} style={`${coverHeightComponent} ${coverSpaceComponent}`}>
	{@render children?.()}
</div>
