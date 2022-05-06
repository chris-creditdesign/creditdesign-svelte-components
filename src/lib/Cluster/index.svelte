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

<style>
	:global(:root) {
		--cluster-space--global: var(--s-1);
		--cluster-justify-content--global: flex-start;
	}

	.cluster {
		--cluster-justify-content--component: initial;
		--cluster-space--component: initial;
		--cluster-justify-content: var(
			--cluster-justify-content--component,
			var(--cluster-justify-content--global)
		);
		--cluster-space: var(--cluster-space--component, var(--cluster-space--global));

		display: flex;
		flex-wrap: wrap;
		justify-content: var(--cluster-justify-content);
		gap: var(--cluster-space);
	}

	:global(ul.cluster) {
		list-style: none;
		padding: 0;
		max-width: none;
		margin-block: 0;
	}

	:global(.cluster > .cluster__grow) {
		flex-grow: 2;
	}

	:global(.no-flexbox-gap .cluster > *) {
		margin: var(--cluster-space);
	}

	:global(.cluster[role='list'] > li) {
		max-width: none;
		padding: 0;
	}
</style>

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
