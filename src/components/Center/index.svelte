<script>
  export let className = "";
  export let centerSpace = "";
  export let centerMeasure = "";
</script>

<style>
  /* LayoutCenter */
  :global(:root) {
    --center-space: var(--s-1);
    --center-measure: var(--measure);
  }

  :global(.center) {
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    max-width: var(--center-measure);
    padding-left: var(--center-space);
    padding-right: var(--center-space);
  }
</style>

<div
  class={`center ${className}`}
  style={`${centerSpace ? `--center-space: ${centerSpace};` : ''} ${centerMeasure ? `--center-measure: ${centerMeasure};` : ''}`}>
  <slot />
</div>
