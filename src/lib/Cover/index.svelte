<!--
@component

Centers an item vertically within a defined height.

Expects the item to be centered to have a `cover__centered` class applied.

Two additional items can be place before and after the centered element.
These will be displayed at the top and bottom of the Cover area.
-->
<script lang="ts">
	import type { Height, Space } from '../types';

	/**
	 * Height of the Cover element.
	 */
	export let coverHeight: Height = '';
	/**
	 * Padding within the Cover element - pushes the content away from its edges.
	 */
	export let coverSpace: Space = '';
	export let className = '';

	$: coverHeightComponent =
		coverHeight.length > 0 ? `--cover-height--component: ${coverHeight};` : '';
	$: coverSpaceComponent = coverSpace.length > 0 ? `--cover-space--component: ${coverSpace};` : '';
</script>

<div class={`cover ${className}`} style={`${coverHeightComponent} ${coverSpaceComponent}`}>
	<slot />
</div>
