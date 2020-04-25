<script>
  export let className = "";
  export let gridSpace;
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
    /* Set a gutter between each grid item */
    column-gap: var(--grid-column-space);
    row-gap: var(--grid-row-space);
    /* repeat() to repeat columns as many times as needed */
    /* auto-fit instead of of set number of columns,
       is used to fit columns into the space provided and
       wrap cells into the row below as needed*/
    /* minmax(250px, 1fr) the minimum width of the columns is 250px.
       If more space is availabel, the columns are expanded to fill
       the space (as defined by auto-fit rather than auto fill with will
       add extra empty columns to fill the space).
       1fr is one fraction of the available space */
    /* min() returns whatever is the minimum value.
       in this case --grid-min-width will be returned unless it is less
       than 100% width. In this case 100% width will be returned.
       The minmax function will then require columns to be a minimum width
       of 100% width - this will create a 1 column layout.
	*/
    grid-template-columns: repeat(
      auto-fit,
      minmax(min(var(--grid-min-width), 100%), 1fr)
    );
  }
</style>

<div
  class={`grid ${className}`}
  style={`${gridColumnSpace ? `--grid-column-space: ${gridColumnSpace};` : ''} ${gridRowSpace ? `--grid-row-space: ${gridRowSpace};` : ''} ${minWidth ? `--grid-min-width: ${minWidth};` : ''}`}>
  <slot />
</div>
