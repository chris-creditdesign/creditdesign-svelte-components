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

	$: boxSpaceComponent = boxSpace.length > 0 ? `--box-space--component: ${boxSpace};` : '';
</script>

<div class={`box ${className}`} style={boxSpaceComponent}>
	<slot />
</div>
