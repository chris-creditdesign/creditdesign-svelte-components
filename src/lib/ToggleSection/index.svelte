<script lang="ts">
	import { onMount } from 'svelte';
	import Cluster from '$lib/Cluster/index.svelte';

	export let buttonMessage: any;

	let expanded = true;

	let handleButtonClick = () => {
		expanded = !expanded;
	};

	onMount(() => {
		expanded = false;
	});
</script>

<style>
	button {
		cursor: pointer;
		background: none;
		border: none;
	}

	svg {
		height: 1em;
		fill: currentcolor;
	}

	[aria-expanded='true'] .vert {
		display: none;
	}
</style>

<Cluster clusterJustifyContent="space-between">
	<slot name="title" />

	<button aria-expanded={expanded} on:click={handleButtonClick}>
		<span class="visually-hidden">{buttonMessage}</span>

		<svg viewBox="0 0 10 10" aria-hidden="true" focusable="false">
			<rect class="vert" height="8" width="2" y="1" x="4" />
			<rect height="2" width="8" y="4" x="1" />
		</svg>
	</button>
</Cluster>
{#if expanded}
	<slot name="content" />
{/if}
