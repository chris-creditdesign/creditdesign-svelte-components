<script lang="ts">
	import Frame from '$lib/Frame/index.svelte';
	import Stack from '$lib/Stack/index.svelte';
	import SqueezeContainer from '$lib/SqueezeContainer/index.svelte';
	import PropNumber from '$lib/PropNumber/index.svelte';

	let frameRatioHeight: number = 9;
	let frameRatioWidth: number = 16;
</script>

# Frame - with a video

## Props

<PropNumber name="frameRatioHeight" bind:value={frameRatioHeight} min={0} max={16} />
<PropNumber name="frameRatioWidth" bind:value={frameRatioWidth} min={0} max={16} />

## Example

<SqueezeContainer>
	<Frame {frameRatioHeight} {frameRatioWidth}>
		<!-- svelte-ignore a11y-media-has-caption -->
		<video poster="/video/video.jpg" playsinline={true} autoplay={true} loop={true}>
			<source src="/video/video.webm" type="video/webm" />
			<source src="/video/video.mp4" type="video/mp4" />
		</video>
	</Frame>
</SqueezeContainer>
