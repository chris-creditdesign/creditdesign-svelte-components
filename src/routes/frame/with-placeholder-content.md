<script lang="ts">
	import Frame from '$lib/Frame/index.svelte';
	import Stack from '$lib/Stack/index.svelte';
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
	import PropNumber from '$lib/PropNumber/index.svelte';

	let frameRatioHeight: number = 9;
	let frameRatioWidth: number = 16;
</script>

<style>
	.place-holder {
		font-weight: bold;
		text-transform: uppercase;
		background-color: #ececec;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>

# Frame - with placeholder content

## Props

<PropNumber name="frameRatioHeight" bind:value={frameRatioHeight} min={0} max={16} />
<PropNumber name="frameRatioWidth" bind:value={frameRatioWidth} min={0} max={16} />

## Example

<SqueezeContainer>
	<Frame {frameRatioHeight} {frameRatioWidth}>
		<div class="place-holder">
			<p>Image pending</p>
		</div>
	</Frame>
</SqueezeContainer>
