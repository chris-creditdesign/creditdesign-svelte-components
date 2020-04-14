<script>
  export let className = "";
  export let gridSpace = "";
  export let minWidth = "14rem";
</script>

<style>
  :global(:root) {
    --grid-space: var(--s-1);
  }

  :global(.grid) {
    display: grid;
    grid-gap: var(--grid-space);
    grid-template-columns: 100%;
  }

  :global(.grid.above-min) {
    grid-template-columns: repeat(auto-fit, minmax(var(--grid-min-width), 1fr));
  }
</style>

<div
  class={`grid above-min ${className}`}
  style={`${gridSpace ? `--grid-space: ${gridSpace};` : ''} ${minWidth ? `--grid-min-width: ${minWidth};` : ''}`}>
  <slot />
</div>
