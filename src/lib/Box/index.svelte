<!--
@component

Used to add padding around its contents.
-->
<script lang="ts">
	import type { Space } from '../types';

	/**
	 * Amount of padding to add
	 */
	export let boxSpace: Space = '';
	export let className = '';

	let boxSpaceComponent = '';

	$: {
		if (boxSpace.length > 0) {
			boxSpaceComponent = `--box-space--component: ${boxSpace};`;
		}
	}
</script>

<style>
	:global(:root) {
		--box-space--global: var(--s-1);
	}

	.box {
		--box-space--component: initial;
		--box-space: var(--box-space--component, var(--box-space--global, 1rem));

		padding: 1rem;
		padding: var(--box-space);
	}
</style>

<div class={`box ${className}`} style={boxSpaceComponent}>
	<slot />
</div>
