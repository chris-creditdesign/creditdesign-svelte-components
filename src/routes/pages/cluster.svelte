<script lang="ts">
	import type { Space, JustifyContent, AlignItems } from '$lib/types';
	import Cluster from '$lib/Cluster/index.svelte';
	import Stack from '$lib/Stack/index.svelte';
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
	import PropSelect from '$lib/PropSelect/index.svelte';

	import {
		space_options,
		justify_content_options,
		align_items_options
	} from '../../preview-content/options';

	let clusterSpace: Space = 'var(--s-1)';
	let clusterJustifyContent: JustifyContent = 'flex-start';
	let alignItems: AlignItems = 'center';
</script>

<style>
	.item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100px;
		height: 100px;
		background-color: lightblue;
	}

	.item--short {
		height: 50px;
	}

	.item--tall {
		height: 150px;
	}

	.item--outer {
		background-color: lightsalmon;
	}

	.cluster__grow {
		background-color: pink;
	}

	:global(.test) {
		border: 1px solid red;
	}
</style>

<Stack stackSpace="var(--s-2)">
	<h1>Cluster</h1>

	<PropSelect options={space_options} name="clusterSpace" bind:value={clusterSpace} />

	<PropSelect
		options={justify_content_options}
		name="clusterJustifyContent"
		bind:value={clusterJustifyContent}
	/>
	<PropSelect options={align_items_options} name="alignItems" bind:value={alignItems} />
</Stack>

<SqueezeContainer headline="Default">
	<Cluster {clusterSpace} {clusterJustifyContent} {alignItems}>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
	</Cluster>
</SqueezeContainer>

<SqueezeContainer headline="With a cluster__grow child element">
	<Cluster {clusterSpace} {clusterJustifyContent} {alignItems}>
		<span class="item cluster__grow">.cluster__grow</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
	</Cluster>
</SqueezeContainer>

<SqueezeContainer headline="With items of different heights">
	<Cluster {clusterSpace} {clusterJustifyContent} {alignItems}>
		<span class="item item--tall">Item</span>
		<span class="item item--short">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item">Item</span>
		<span class="item item--short">Item</span>
		<span class="item">Item</span>
	</Cluster>
</SqueezeContainer>

<SqueezeContainer headline="Combine two cluster elements">
	<Cluster {clusterSpace} {clusterJustifyContent} {alignItems}>
		<span class="item item--outer">Outer item</span>
		<Cluster>
			<span class="item">Inner item</span>
			<span class="item">Inner item</span>
			<span class="item">Inner item</span>
			<span class="item">Inner item</span>
			<span class="item">Inner item</span>
			<span class="item">Inner item</span>
			<span class="item">Inner item</span>
		</Cluster>
	</Cluster>
</SqueezeContainer>

<SqueezeContainer headline="With focusable child elements">
	<Cluster {clusterSpace} {clusterJustifyContent} {alignItems}>
		<a class="item" href="https://www.nature.com">Item</a>
		<a class="item" href="https://www.nature.com">Item</a>
		<a class="item" href="https://www.nature.com">Item</a>
		<a class="item" href="https://www.nature.com">Item</a>
		<a class="item" href="https://www.nature.com">Item</a>
		<a class="item" href="https://www.nature.com">Item</a>
		<a class="item" href="https://www.nature.com">Item</a>
	</Cluster>
</SqueezeContainer>

<SqueezeContainer headline="With no flexbox gap">
	<div class="no-flexbox-gap">
		<Cluster {clusterSpace} {clusterJustifyContent} {alignItems}>
			<span class="item">Item</span>
			<span class="item">Item</span>
			<span class="item">Item</span>
			<span class="item">Item</span>
			<span class="item">Item</span>
			<span class="item">Item</span>
			<span class="item">Item</span>
		</Cluster>
	</div>
</SqueezeContainer>

<SqueezeContainer headline="ARIA role list">
	<Cluster {clusterSpace} {clusterJustifyContent} {alignItems} list={true}>
		<li class="item">List item</li>
		<li class="item">List item</li>
		<li class="item">List item</li>
		<li class="item">List item</li>
		<li class="item">List item</li>
		<li class="item">List item</li>
		<li class="item">List item</li>
	</Cluster>
</SqueezeContainer>
