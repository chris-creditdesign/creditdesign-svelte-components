<!--
@component

Element with a defined width / height ratio into wich any content can be placed.
	 
Content will be stretched to fill the Frame area.
Content which overflows the Frame will be clipped off.
-->
<script lang="ts">
	interface Props {
		frameRatioHeight?: number;
		frameRatioWidth?: number;
		className?: string;
		children?: import('svelte').Snippet;
	}

	let {
		frameRatioHeight = 0,
		frameRatioWidth = 0,
		className = '',
		children
	}: Props = $props();

	let frameRatioHeightComponent =
		$derived(frameRatioHeight > 0 ? `--frame-ratio-height--component: ${frameRatioHeight};` : '');
	let frameRatioWidthComponent =
		$derived(frameRatioWidth > 0 ? `--frame-ratio-width--component: ${frameRatioWidth};` : '');
</script>

<div
	class={`frame ${className}`}
	style={`${frameRatioHeightComponent} ${frameRatioWidthComponent}`}
>
	{@render children?.()}
</div>
