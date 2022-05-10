<!--
@component

Used to cluster child elements in a wrap-able horizontal row.

Adding a `cluster__grow` class to a child element will cause it to stretch to fill available space.

If flexbox gap is not supported, expects a `no-flexbox-gap` class to be applied to a parent element.
In this case `clusterSpace` is applied as as padding around the child elements.
-->
<script lang="ts">
	import type { Space, AlignItems, JustifyContent } from '../types';

	/**
	 * Flexbox justify content.
	 */
	export let clusterJustifyContent: JustifyContent = '';
	/**
	 * Flexbox gap.
	 */
	export let clusterSpace: Space = '';
	/**
	 * Flexbox align-items.
	 */
	export let alignItems: AlignItems = 'center';
	/**
	 * Apply the ARIA `list` role.
	 */
	export let list = false;
	export let className = '';

	let tag = list ? 'ul' : 'div';

	$: alignItemsComponent = `align-items: ${alignItems};`;
	$: clusterJustifyContentComponent =
		clusterJustifyContent.length > 0
			? `--cluster-justify-content--component: ${clusterJustifyContent};`
			: '';
	$: clusterSpaceComponent =
		clusterSpace.length > 0 ? `--cluster-space--component: ${clusterSpace};` : '';
</script>

<svelte:element
	this={tag}
	class={`cluster ${className}`}
	style={`
		${alignItemsComponent}
		${clusterJustifyContentComponent}
		${clusterSpaceComponent}
	`}
>
	<slot />
</svelte:element>
