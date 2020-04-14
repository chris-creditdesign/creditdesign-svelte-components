<script>
  export let className = "";
  export let boxSpace = "";
</script>

<style>
  :global(:root) {
    --box-space: var(--s-1);
  }

  :global(.box) {
    padding: var(--box-space);
  }
</style>

<div
  class={`box ${className}`}
  style={`${boxSpace ? `--box-space: ${boxSpace};` : ''}`}>
  <slot />
</div>
