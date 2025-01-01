<!--
@component

Used to add padding around its contents.
-->
<script lang="ts">
	import type { Space } from '../types';

	
	interface Props {
		/**
	 * Amount of padding to add
	 */
		boxSpace?: Space;
		className?: string;
		children?: import('svelte').Snippet;
	}

	let { boxSpace = '', className = '', children }: Props = $props();

	let boxSpaceComponent = $derived(boxSpace.length > 0 ? `--box-space--component: ${boxSpace};` : '');
</script>

<div class={`box ${className}`} style={boxSpaceComponent}>
	{@render children?.()}
</div>
