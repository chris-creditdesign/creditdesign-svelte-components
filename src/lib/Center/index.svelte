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
	export let intrinsicallyCenter: boolean = false;
	export let className: string = '';

	let centerMeasureComponent: string = '';
	let centerSpaceComponent: string = '';

	$: style = `${centerMeasureComponent} ${centerSpaceComponent}`;

	$: {
		if (centerMeasure.length > 0) {
			centerMeasureComponent = `--center-measure--component: ${centerMeasure};`;
		}
		if (centerSpace.length > 0) {
			centerSpaceComponent = `--center-space--component: ${centerSpace};`;
		}
	}
</script>

<style>
	:global(:root) {
		--center-measure--global: var(--measure);
		--center-space--global: var(--s-1);
	}

	.center {
		--center-measure--component: initial;
		--center-space--component: initial;
		--center-measure: var(--center-measure--component, var(--center-measure--global, 60ch));
		--center-space: var(--center-space--component, var(--center-space--global, 1rem));

		box-sizing: content-box;
		max-width: 60ch;
		max-width: var(--center-measure);
		padding-right: 1rem;
		padding-right: var(--center-space);
		padding-left: 1rem;
		padding-left: var(--center-space);
		margin-right: auto;
		margin-left: auto;
	}

	.center--intrinsically-center {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>

<div class={`center ${className}`} class:center--intrinsically-center={intrinsicallyCenter} {style}>
	<slot />
</div>
