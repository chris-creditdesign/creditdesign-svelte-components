<script lang="ts">
	import Frame from '$lib/Frame/index.svelte';
	import Stack from '$lib/Stack/index.svelte';
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
	import PropNumber from '$lib/PropNumber/index.svelte';

	let frameRatioHeight: number = 9;
	let frameRatioWidth: number = 16;
</script>

# Frame

## Props

<PropNumber name="frameRatioHeight" bind:value={frameRatioHeight} min={0} max={16} />
<PropNumber name="frameRatioWidth" bind:value={frameRatioWidth} min={0} max={16} />

## Example - with an image

<SqueezeContainer headline="Default">
	<Frame {frameRatioHeight} {frameRatioWidth}>
		<img src="/img/image.jpg" alt="Test." />
	</Frame>
</SqueezeContainer>
