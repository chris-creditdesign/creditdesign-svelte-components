<!--
@component

Used to cluster child elements in a wrap-able horizontal row.

Adding a `cluster__grow` class to a child element will cause it to stretch to fill available space.

If flexbox gap is not supported, expects a `no-flexbox-gap` class to be applied to a parent element.
In this case `clusterSpace` is applied as as padding around the child elements.
-->
<script lang="ts">
	import type { Space, AlignItems, JustifyContent } from '../types';

	
	
	
	
	interface Props {
		/**
	 * Flexbox justify content.
	 */
		clusterJustifyContent?: JustifyContent;
		/**
	 * Flexbox gap.
	 */
		clusterSpace?: Space;
		/**
	 * Flexbox align-items.
	 */
		alignItems?: AlignItems;
		/**
	 * Apply the ARIA `list` role.
	 */
		list?: boolean;
		className?: string;
		children?: import('svelte').Snippet;
	}

	let {
		clusterJustifyContent = '',
		clusterSpace = '',
		alignItems = 'center',
		list = false,
		className = '',
		children
	}: Props = $props();

	let tag = list ? 'ul' : 'div';

	let alignItemsComponent = $derived(`align-items: ${alignItems};`);
	let clusterJustifyContentComponent =
		$derived(clusterJustifyContent.length > 0
			? `--cluster-justify-content--component: ${clusterJustifyContent};`
			: '');
	let clusterSpaceComponent =
		$derived(clusterSpace.length > 0 ? `--cluster-space--component: ${clusterSpace};` : '');
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
	{@render children?.()}
</svelte:element>
