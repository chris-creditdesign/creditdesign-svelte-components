<!--
@component

Element with a defined width / height ratio into wich any content can be placed.
	 
Content will be stretched to fill the Frame area.
Content which overflows the Frame will be clipped off.
-->
<script lang="ts">
	export let frameRatioHeight: number = 0;
	export let frameRatioWidth: number = 0;
	export let className: string = '';

	let frameRatioHeightComponent: string = '';
	let frameRatioWidthComponent: string = '';
	$: style = `${frameRatioHeightComponent} ${frameRatioWidthComponent}`;

	$: {
		if (frameRatioHeight > 0) {
			frameRatioHeightComponent = `--frame-ratio-height--component: ${frameRatioHeight};`;
		}
		if (frameRatioWidth > 0) {
			frameRatioWidthComponent = `--frame-ratio-width--component: ${frameRatioWidth};`;
		}
	}
</script>

<style>
	:global(:root) {
		--frame-ratio-height--global: 9;
		--frame-ratio-width--global: 16;
	}

	.frame {
		--frame-ratio-height--component: initial;
		--frame-ratio-width--component: initial;
		--frame-ratio-height: var(--frame-ratio-height--component, var(--frame-ratio-height--global));
		--frame-ratio-width: var(--frame-ratio-width--component, var(--frame-ratio-width--global));

		position: relative;
		aspect-ratio: var(--frame-ratio-width) / var(--frame-ratio-height);
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	:global(.frame > img) {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	:global(.frame > video) {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>

<div class={`frame ${className}`} {style}>
	<slot />
</div>
