<!--
@component

Will switch from a column to a stacked layout below a minimum width.
	 
If more than seven child elements, the stacked layout is applied automatically.
	 
If flexbox gap is not supported, expects a `no-flexbox-gap` class to be applied to a parent element.
In this case `switcherSpace` is applied as as padding around the child elements.
-->
<script lang="ts">
	import type { Measure, Space } from '../types';

	/**
	 * Component width below wich a column layout will be applied.
	 */
	export let switcherMinWidth: Measure = '';
	/**
	 * Space between child elements.
	 */
	export let switcherSpace: Space = '';
	/**
	 * Apply the ARIA `list` role.
	 */
	export let list = false;
	export let className = '';

	let tag = list ? 'ul' : 'div';

	$: switcherMinWidthComponent =
		switcherMinWidth.length > 0 ? `--switcher-min-width--component: ${switcherMinWidth};` : '';
	$: switcherSpaceComponent =
		switcherSpace.length > 0 ? `--switcher-space--component: ${switcherSpace};` : '';
</script>

<style>
</style>

<svelte:element
	this={tag}
	class={`switcher ${className}`}
	style={`${switcherMinWidthComponent} ${switcherSpaceComponent}`}
>
	<slot />
</svelte:element>
