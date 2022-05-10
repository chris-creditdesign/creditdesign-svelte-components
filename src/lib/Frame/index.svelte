<!--
@component

Element with a defined width / height ratio into wich any content can be placed.
	 
Content will be stretched to fill the Frame area.
Content which overflows the Frame will be clipped off.
-->
<script lang="ts">
	export let frameRatioHeight = 0;
	export let frameRatioWidth = 0;
	export let className = '';

	$: frameRatioHeightComponent =
		frameRatioHeight > 0 ? `--frame-ratio-height--component: ${frameRatioHeight};` : '';
	$: frameRatioWidthComponent =
		frameRatioWidth > 0 ? `--frame-ratio-width--component: ${frameRatioWidth};` : '';
</script>

<div
	class={`frame ${className}`}
	style={`${frameRatioHeightComponent} ${frameRatioWidthComponent}`}
>
	<slot />
</div>
