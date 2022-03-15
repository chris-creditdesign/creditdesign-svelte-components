<script lang="ts">
	import type { Space, Height } from '$lib/types';
	import Cover from '$lib/Cover/index.svelte';
	import Stack from '$lib/Stack/index.svelte';
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
	import PropSelect from '$lib/PropSelect/index.svelte';

	import { space_options, height_options } from '../../preview-content/options';

	let coverSpace: Space = 'var(--s-1)';
	let coverHeight: Height = '50vh';
</script>

<style>	
	.item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: none;
		height: 100px;
		background-color: lightblue;
	}

	.cover__centered {
		background-color: pink;
	}
</style>

# Cover - with one item

## Props

<PropSelect options={space_options} name="coverSpace" bind:value={coverSpace} />
<PropSelect options={height_options} name="coverHeight" bind:value={coverHeight} />

## Examples

<SqueezeContainer headline="With three items">
	<Cover {coverSpace} {coverHeight}>
		<span class="item cover__centered">.cover__centered</span>
	</Cover>
</SqueezeContainer>
