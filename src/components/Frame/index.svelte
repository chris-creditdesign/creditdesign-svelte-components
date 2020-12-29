<script>
  export let frameRatioHeight = 0;
  export let frameRatioWidth = 0;

  let frameRatioHeightComponent =
    frameRatioHeight > 0
      ? `--frame-ratio-height--component: ${frameRatioHeight};`
      : "";
  let frameRatioWidthComponent =
    frameRatioWidth > 0
      ? `--frame-ratio-width--component: ${frameRatioWidth};`
      : "";
  let style = `${frameRatioHeightComponent} ${frameRatioWidthComponent}`;
</script>

<style>
  :global(:root) {
    --frame-ratio-height--global: 9;
    --frame-ratio-width--global: 16;
  }

  .frame {
    --frame-ratio-height--component: initial;
    --frame-ratio-width--component: initial;
    --frame-ratio-height: var(
      --frame-ratio-height--component,
      var(--frame-ratio-height--global)
    );
    --frame-ratio-width: var(
      --frame-ratio-width--component,
      var(--frame-ratio-width--global)
    );

    position: relative;
    padding-bottom: calc(
      var(--frame-ratio-height) / var(--frame-ratio-width) * 100%
    );
  }

  :global(.frame > *) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  :global(.frame > img, .frame > video) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

<div class="frame" style="{style}">
  <slot />
</div>
