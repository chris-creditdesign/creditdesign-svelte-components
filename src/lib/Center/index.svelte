<!--
@component

Used to horizontally center its contents.
-->
<script lang="ts">
	import type { Space, Measure } from '../types';

	/**
	 * Maximum width of contents.
	 */
	export let centerMeasure: Measure = '';
	/**
	 * Padding left and right around contents.
	 */
	export let centerSpace: Space = '';
	/**
	 * If true applied flexbox column, align-items: center
	 * to intrinsically center elements within the Center
	 * component which are not full width. Any margin between
	 * child elements will have to be applied without a Stack component.
	 */
	export let intrinsicallyCenter = false;
	export let className = '';

	$: centerMeasureComponent =
		centerMeasure.length > 0 ? `--center-measure--component: ${centerMeasure};` : '';
	$: centerSpaceComponent =
		centerSpace.length > 0 ? `--center-space--component: ${centerSpace};` : '';
</script>

<div
	class={`center ${className}`}
	class:intrinsically-center={intrinsicallyCenter}
	style={`${centerMeasureComponent} ${centerSpaceComponent}`}
>
	<slot />
</div>
