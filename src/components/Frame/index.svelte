<script>
  export let className = "";
  export let frameRatioHeight;
  export let frameRatioWidth;
</script>

<style>
  :global(:root) {
    --frame-ratio-height: 9; /* height */
    --frame-ratio-width: 16; /* width */
  }

  :global(.frame) {
    padding-bottom: calc(
      var(--frame-ratio-height) / var(--frame-ratio-width) * 100%
    );
    position: relative;
  }

  :global(.frame > *) {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :global(.frame > img, .frame > video) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

<div
  class={`frame ${className}`}
  style={`${frameRatioHeight ? `--frame-ratio-height: ${frameRatioHeight};` : ''} ${frameRatioWidth ? `--frame-ratio-width: ${frameRatioWidth};` : ''}`}>
  <slot />
</div>
