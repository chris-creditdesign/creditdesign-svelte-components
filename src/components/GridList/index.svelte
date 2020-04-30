<script>
  export let className = "";
  export let gridSpace = "";
  export let gridColumnSpace = "";
  export let gridRowSpace = "";
  export let minWidth = "";

  if (gridSpace) {
    gridColumnSpace = gridRowSpace = gridSpace;
  }
</script>

<style>
  :global(:root) {
    --grid-space: var(--s-1);
    --grid-column-space: var(--grid-space);
    --grid-row-space: var(--grid-space);
    --grid-min-width: var(--measure-small);
  }

  :global(.grid) {
    display: grid;
    column-gap: var(--grid-column-space);
    row-gap: var(--grid-row-space);
    grid-template-columns: repeat(
      auto-fit,
      minmax(min(var(--grid-min-width), 100%), 1fr)
    );
  }

  :global(ul.grid) {
    max-width: none;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  :global(ul.grid li) {
    max-width: none;
    padding: 0;
  }
</style>

<ul
  class={`grid ${className}`}
  style={`${gridColumnSpace ? `--grid-column-space: ${gridColumnSpace};` : ''} ${gridRowSpace ? `--grid-row-space: ${gridRowSpace};` : ''} ${minWidth ? `--grid-min-width: ${minWidth};` : ''}`}>
  <slot />
</ul>
