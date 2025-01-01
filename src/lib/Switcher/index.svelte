<!--
@component

Will switch from a column to a stacked layout below a minimum width.
	 
If more than seven child elements, the stacked layout is applied automatically.
	 
If flexbox gap is not supported, expects a `no-flexbox-gap` class to be applied to a parent element.
In this case `switcherSpace` is applied as as padding around the child elements.
-->
<script lang="ts">
	import type { Measure, Space } from '../types';

	
	
	
	interface Props {
		/**
	 * Component width below wich a column layout will be applied.
	 */
		switcherMinWidth?: Measure;
		/**
	 * Space between child elements.
	 */
		switcherSpace?: Space;
		/**
	 * Apply the ARIA `list` role.
	 */
		list?: boolean;
		className?: string;
		children?: import('svelte').Snippet;
	}

	let {
		switcherMinWidth = '',
		switcherSpace = '',
		list = false,
		className = '',
		children
	}: Props = $props();

	let tag = list ? 'ul' : 'div';

	let switcherMinWidthComponent =
		$derived(switcherMinWidth.length > 0 ? `--switcher-min-width--component: ${switcherMinWidth};` : '');
	let switcherSpaceComponent =
		$derived(switcherSpace.length > 0 ? `--switcher-space--component: ${switcherSpace};` : '');
</script>

<style>
</style>

<svelte:element
	this={tag}
	class={`switcher ${className}`}
	style={`${switcherMinWidthComponent} ${switcherSpaceComponent}`}
>
	{@render children?.()}
</svelte:element>
