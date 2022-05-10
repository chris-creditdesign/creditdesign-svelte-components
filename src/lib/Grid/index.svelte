<!--
@component

Grid layout that will adjust number columns depending on the space available.
-->
<script lang="ts">
	import type { Space, Measure } from '../types';

	/**
	 * Horizontal space between columns.
	 */
	export let gridColumnSpace: Space = '';
	/**
	 * Vertical space between columns.
	 */
	export let gridRowSpace: Space = '';
	/**
	 * If `gridSpace` is set this value will override both
	 * `gridColumnSpace` and `gridRowSpace` and set the same
	 * value for both.
	 */
	export let gridSpace: Space = '';
	/**
	 * Minimum width of each column. Columns will stretch until
	 * there is space to fit in another column of this min with.
	 */
	export let minWidth: Measure = '';
	/**
	 * Apply the ARIA `list` role.
	 */
	export let list = false;
	export let className = '';

	let tag = list ? 'ul' : 'div';

	let gridColumnSpaceComponent = '';
	let gridRowSpaceComponent = '';

	$: {
		if (gridSpace.length > 0) {
			gridColumnSpaceComponent = `--grid-column-space--component: ${gridSpace};`;
			gridRowSpaceComponent = `--grid-row-space--component: ${gridSpace};`;
		} else {
			if (gridColumnSpace.length > 0) {
				gridColumnSpaceComponent = `--grid-column-space--component: ${gridColumnSpace};`;
			}
			if (gridRowSpace.length > 0) {
				gridRowSpaceComponent = `--grid-row-space--component: ${gridRowSpace};`;
			}
		}
	}
	$: minWidthComponent = minWidth.length > 0 ? `--grid-min-width--component: ${minWidth};` : '';
</script>

<svelte:element
	this={tag}
	class={`grid ${className}`}
	style={`${gridColumnSpaceComponent} ${gridRowSpaceComponent} ${minWidthComponent}`}
>
	<slot />
</svelte:element>
