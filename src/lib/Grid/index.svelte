<!--
@component

Grid layout that will adjust number columns depending on the space available.
-->
<script lang="ts">
	import { run } from 'svelte/legacy';

	import type { Space, Measure } from '../types';

	
	
	
	
	
	interface Props {
		/**
	 * Horizontal space between columns.
	 */
		gridColumnSpace?: Space;
		/**
	 * Vertical space between columns.
	 */
		gridRowSpace?: Space;
		/**
	 * If `gridSpace` is set this value will override both
	 * `gridColumnSpace` and `gridRowSpace` and set the same
	 * value for both.
	 */
		gridSpace?: Space;
		/**
	 * Minimum width of each column. Columns will stretch until
	 * there is space to fit in another column of this min with.
	 */
		minWidth?: Measure;
		/**
	 * Apply the ARIA `list` role.
	 */
		list?: boolean;
		className?: string;
		children?: import('svelte').Snippet;
	}

	let {
		gridColumnSpace = '',
		gridRowSpace = '',
		gridSpace = '',
		minWidth = '',
		list = false,
		className = '',
		children
	}: Props = $props();

	let tag = list ? 'ul' : 'div';

	let gridColumnSpaceComponent = $state('');
	let gridRowSpaceComponent = $state('');

	run(() => {
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
	});
	let minWidthComponent = $derived(minWidth.length > 0 ? `--grid-min-width--component: ${minWidth};` : '');
</script>

<svelte:element
	this={tag}
	class={`grid ${className}`}
	style={`${gridColumnSpaceComponent} ${gridRowSpaceComponent} ${minWidthComponent}`}
>
	{@render children?.()}
</svelte:element>
