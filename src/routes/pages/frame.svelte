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
	}
</style>

<Stack stackSpace="var(--s-2)">
	<h1>Frame</h1>

	<PropNumber name="frameRatioHeight" bind:value={frameRatioHeight} min={0} max={16} />
	<PropNumber name="frameRatioWidth" bind:value={frameRatioWidth} min={0} max={16} />
</Stack>

<SqueezeContainer headline="Default">
	<Frame {frameRatioHeight} {frameRatioWidth}>
		<img src="/img/image.jpg" alt="Test." />
	</Frame>
</SqueezeContainer>

<SqueezeContainer headline="With video">
	<Frame {frameRatioHeight} {frameRatioWidth}>
		<!-- svelte-ignore a11y-media-has-caption -->
		<video poster="/video/video.jpg" playsinline={true} autoplay={true} loop={true}>
			<source src="/video/video.webm" type="video/webm" />
			<source src="/video/video.mp4" type="video/mp4" />
		</video>
	</Frame>
</SqueezeContainer>

<SqueezeContainer headline="With placeholder content">
	<Frame {frameRatioHeight} {frameRatioWidth}>
		<div class="place-holder">
			<p>Image pending</p>
		</div>
	</Frame>
</SqueezeContainer>
