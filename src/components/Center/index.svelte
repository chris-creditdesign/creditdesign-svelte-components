<script>
  export let centerSpace = "";
  export let centerMeasure = "";
</script>

<style>
  :global(:root) {
    --center-space: var(--s-1);
    --center-measure: var(--measure);
  }

  .center {
    box-sizing: content-box;
    max-width: var(--center-measure);
    padding-right: var(--center-space);
    padding-left: var(--center-space);
    margin-right: auto;
    margin-left: auto;
  }
</style>

<div
  class="center"
  style={`${centerSpace ? `--center-space: ${centerSpace};` : ''} ${centerMeasure ? `--center-measure: ${centerMeasure};` : ''}`}>
  <slot />
</div>
