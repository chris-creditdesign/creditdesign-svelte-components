<script>
  export let frameRatioHeight;
  export let frameRatioWidth;
</script>

<style>
  :global(:root) {
    --frame-ratio-height: 9; /* height */
    --frame-ratio-width: 16; /* width */
  }

  .frame {
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

<div
  class="frame"
  style={`${frameRatioHeight ? `--frame-ratio-height: ${frameRatioHeight};` : ''} ${frameRatioWidth ? `--frame-ratio-width: ${frameRatioWidth};` : ''}`}>
  <slot />
</div>
