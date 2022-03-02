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
	 * Vertical space between child elments.
	 */
	export let stackSpace: Space = '';
	/**
	 * Apply the ARIA `list` role.
	 */
	export let list: boolean = false;
	export let className: string = '';

	$: style = '';

	$: {
		if (stackSpace.length > 0) {
			style = `--stack-space--component: ${stackSpace};`;
		}
	}
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

		/*	So that the Stack area will fill the available height,
			causing the `.stack__split-after` element to be pushed
			to the bottom */
		/* height: 100%; */
	}

	.stack[role='list'] {
		list-style: none;
	}

	:global(.stack > *) {
		margin-top: 0;
		margin-bottom: 0;
	}

	:global(.stack > .stack__split-after) {
		margin-bottom: auto;
	}

	:global(.no-flexbox-gap .stack > * + *) {
		margin-top: 1rem;
		margin-top: var(--stack-space);
	}
</style>

<div class={`stack ${className}`} role={list ? 'list' : null} {style}>
	<slot />
</div>
