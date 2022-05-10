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
	 * If false the sidebar will be on the right / below the main content.
	 * If true the sidebar will be on the left / above.
	 */
	export let sidebarOnRight = false;
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
</style>

<div
	class={`sidebar ${className}`}
	class:sidebar-on-right={sidebarOnRight}
	style={`
		${sidebarContentMinWidthComponent}
		${sidebarSpaceComponent}
		${sidebarWidthComponent}
		${alignItemsComponent}
	`}
>
	{#if sidebarOnRight}
		<slot name="main-content" />
		<slot name="sidebar" />
	{:else}
		<slot name="sidebar" />
		<slot name="main-content" />
	{/if}
</div>
