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
	export let list: boolean = false;
	export let className: string = '';

	let gridColumnSpaceComponent: string = '';
	let gridRowSpaceComponent: string = '';
	let minWidthComponent: string = '';

	$: style = `${gridColumnSpaceComponent} ${gridRowSpaceComponent} ${minWidthComponent}`;

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
		if (minWidth.length > 0) {
			minWidthComponent = `--grid-min-width--component: ${minWidth};`;
		}
	}
</script>

<style>
	:global(:root) {
		--grid-space--global: var(--s-1);
		--grid-column-space--global: var(--grid-space--global);
		--grid-min-width--global: var(--measure-small);
		--grid-row-space--global: var(--grid-space--global);
	}

	.grid {
		--grid-column-space--component: initial;
		--grid-min-width--component: initial;
		--grid-row-space--component: initial;
		--grid-column-space: var(--grid-column-space--component, var(--grid-column-space--global));
		--grid-min-width: var(--grid-min-width--component, var(--grid-min-width--global));
		--grid-row-space: var(--grid-row-space--component, var(--grid-row-space--global));

		display: grid;

		/* Set a gutter between each grid item */
		column-gap: var(--grid-column-space);
		row-gap: var(--grid-row-space);

		/*	repeat() to repeat columns as many times as needed
			auto-fit instead of of set number of columns,
			is used to fit columns into the space provided and
			wrap cells into the row below as needed
			minmax(250px, 1fr) the minimum width of the columns is 250px.
			If more space is available, the columns are expanded to fill
			the space (as defined by auto-fit rather than auto fill witch will
			add extra empty columns to fill the space).
			1fr is one fraction of the available space
			min() returns whatever is the minimum value.
			in this case --grid-min-width will be returned unless it is less
			than 100% width. In this case 100% width will be returned.
			The minmax function will then require columns to be a minimum width
			of 100% width - this will create a 1 column layout.
		*/
		grid-template-columns: repeat(auto-fit, minmax(min(var(--grid-min-width), 100%), 1fr));
	}

	.grid[role='list'] {
		list-style: none;
	}
</style>

<div class={`grid ${className}`} role={list ? 'list' : null} {style}>
	<slot />
</div>
