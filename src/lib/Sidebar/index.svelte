<!--
@component

Sidebar content will be placed below or above the main content at the minimum width.
	 
Expects only two child elements, slots for `main-content` and `sidebar`. Use `<svelte:fragment>` elements 
to avoid adding extra wrapper divs to the rendered html. ie.
	 
`<svelte:fragment slot="sidebar">...</svelte:fragment>`
	 
`<svelte:fragment slot="main-content">...</svelte:fragment>`
	 
If flexbox gap is not supported, expects a `no-flexbox-gap` class to be applied to a parent element.

In this case `sidebarSpace` is applied as as padding around the `.main-content` and `.sidebar` elements.
-->
<script lang="ts">
	import type { Space, Measure, PercentWidth, AlignItems } from '../types';

	/**
	 * Minimum width of content at which point layout will flip.
	 * ie if the `main-content` is less that 50% of the width
	 * the sidebar will be placed above or below.
	 */
	export let sidebarContentMinWidth: PercentWidth = '';
	/**
	 * If true the sidebar will be on the left / below the main content.
	 * If false the sidebar will be on the right / above.
	 */
	export let sidebarOnLeft = true;
	/**
	 * Side of gutter between the sidebar and the main content.
	 */
	export let sidebarSpace: Space = '';
	/**
	 * If 'inherit' the width of the sidebar will be defined by its contents.
	 */
	export let sidebarWidth: Measure = '';
	/**
	 * Sets flexbox align-items on sidebar-wrapper, applied to sidebar and main content.
	 */
	export let alignItems: AlignItems = 'stretch';
	export let className = '';

	$: sidebarContentMinWidthComponent =
		sidebarContentMinWidth.length > 0
			? `--sidebar-content-min-width--component: ${sidebarContentMinWidth};`
			: '';
	$: sidebarSpaceComponent =
		sidebarSpace.length > 0 ? `--sidebar-space--component: ${sidebarSpace};` : '';
	$: sidebarWidthComponent =
		sidebarWidth.length > 0 ? `--sidebar-width--component: ${sidebarWidth};` : '';
	$: alignItemsComponent = `align-items: ${alignItems};`;
</script>

<style>
	:global(:root) {
		--sidebar-content-min-width--global: 75%;
		--sidebar-space--global: var(--s-1);
		--sidebar-width--global: inherit;
	}

	.sidebar--wrapper {
		--sidebar-content-min-width--component: initial;
		--sidebar-space--component: initial;
		--sidebar-width--component: initial;
		--sidebar-content-min-width: var(
			--sidebar-content-min-width--component,
			var(--sidebar-content-min-width--global)
		);
		--sidebar-space: var(--sidebar-space--component, var(--sidebar-space--global));
		--sidebar-width: var(--sidebar-width--component, var(--sidebar-width--global));

		display: flex;
		flex-wrap: wrap;
		gap: var(--sidebar-space);
	}

	:global(.no-flexbox-gap .sidebar--wrapper > *) {
		margin: var(--sidebar-space);
	}

	/* stylelint-disable */
	/* If data-sidebar-on-left is "true" the first child is the sidebar.
     If data-sidebar-on-left is "false" the last child is the sidebar. */
	:global(.sidebar--wrapper[data-sidebar-on-left='true']
			> *:first-child, .sidebar--wrapper[data-sidebar-on-left='false'] > *:last-child) {
		flex-basis: var(--sidebar-width);
		flex-grow: 1;
	}

	/* If data-sidebar-on-left is "true" the last child is the main content.
     If data-sidebar-on-left is "false" the first child is the main content. */
	:global(.sidebar--wrapper[data-sidebar-on-left='true']
			> *:last-child, .sidebar--wrapper[data-sidebar-on-left='false'] > *:first-child) {
		flex-basis: 0;
		flex-grow: 999;
		min-width: calc(var(--sidebar-content-min-width) - var(--sidebar-space));
	}
	/* stylelint-enable */
</style>

<div
	class={`sidebar--wrapper ${className}`}
	data-sidebar-on-left={sidebarOnLeft}
	style={`
		${sidebarContentMinWidthComponent}
		${sidebarSpaceComponent}
		${sidebarWidthComponent}
		${alignItemsComponent}
	`}
>
	{#if sidebarOnLeft}
		<slot name="sidebar" />
		<slot name="main-content" />
	{:else}
		<slot name="main-content" />
		<slot name="sidebar" />
	{/if}
</div>
