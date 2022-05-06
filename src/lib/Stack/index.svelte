<!--
@component

If flexbox gap is not supported, expects a `no-flexbox-gap` class to be applied to a parent element.
In this case standard `Stack` margirnsn applied around the child elements.
	
A child element with `.stack__split-after` applied will push
items below it to the bottom of the container.
	
`.stack-list` set to height 100% that the Stack area will fill the available height,
causing the `.stack__split-after` element to be pushed to the bottom.
-->
<script lang="ts">
	import type { Space } from '../types';

	/**
	 * Vertical space between child elements.
	 */
	export let stackSpace: Space = '';
	/**
	 * If true a ul element will be rendered instead of the standard div.
	 */
	export let list = false;
	export let className = '';

	let tag = list ? 'ul' : 'div';

	$: stackSpaceComponent = stackSpace.length > 0 ? `--stack-space--component: ${stackSpace};` : '';
</script>

<style>
	:global(:root) {
		--stack-space--global: var(--s-1);
	}

	.stack {
		--stack-space--component: initial;
		--stack-space: var(--stack-space--component, var(--stack-space--global));

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: var(--stack-space);
	}

	.stack:only-child {
		/*	So that the Stack area will fill the available height,
			causing the `.stack__split-after` element to be pushed
			to the bottom - but only when the stack is the only
			child of its parent element */
		block-size: 100%;
	}

	:global(ul.stack) {
		list-style: none;
		padding: 0;
		max-width: none;
		margin-block: 0;
	}

	:global(.stack > *) {
		margin-block: 0;
	}

	:global(.stack > .stack__split-after) {
		margin-block-end: auto;
	}

	:global(.no-flexbox-gap .stack > * + *) {
		margin-block-start: var(--stack-space, 1rem);
	}
</style>

<svelte:element this={tag} class={`stack ${className}`} style={stackSpaceComponent}>
	<slot />
</svelte:element>
