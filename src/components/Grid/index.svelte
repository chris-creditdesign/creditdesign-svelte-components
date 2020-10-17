<script>
  export let gridSpace = "";
  export let gridColumnSpace = "";
  export let gridRowSpace = "";
  export let minWidth = "";

  if (gridSpace) {
    console.log("we have gridspace");
    gridColumnSpace = gridRowSpace = gridSpace;
  }

  let gridColumnSpaceComponent = gridColumnSpace
    ? `--grid-column-space--component: ${gridColumnSpace};`
    : "";
  let gridRowSpaceComponent = gridRowSpace
    ? `--grid-row-space--component: ${gridRowSpace};`
    : "";
  let minWidthComponent = minWidth
    ? `--grid-min-width--component: ${minWidth};`
    : "";
  let style = `${gridColumnSpaceComponent} ${gridRowSpaceComponent} ${minWidthComponent}`;
</script>

<style>
  :global(:root) {
    --grid-space--global: var(--s-1);
    --grid-column-space--global: var(--grid-space--global);
    --grid-row-space--global: var(--grid-space--global);
    --grid-min-width--global: var(--measure-small);
  }

  .grid {
    --grid-min-width--component: initial;
    --grid-column-space--component: initial;
    --grid-row-space--component: initial;

    display: grid;

    /* Set a gutter between each grid item */
    column-gap: var(
      --grid-column-space--component,
      var(--grid-column-space--global)
    );
    row-gap: var(--grid-row-space--component, var(--grid-row-space--global));

    /* repeat() to repeat columns as many times as needed
       auto-fit instead of of set number of columns,
       is used to fit columns into the space provided and
       wrap cells into the row below as needed
       minmax(250px, 1fr) the minimum width of the columns is 250px.
       If more space is availabel, the columns are expanded to fill
       the space (as defined by auto-fit rather than auto fill with will
       add extra empty columns to fill the space).
       1fr is one fraction of the available space
       min() returns whatever is the minimum value.
       in this case --grid-min-width will be returned unless it is less
       than 100% width. In this case 100% width will be returned.
       The minmax function will then require columns to be a minimum width
       of 100% width - this will create a 1 column layout.
	*/
    grid-template-columns: repeat(
      auto-fit,
      minmax(
        min(
          var(--grid-min-width--component, var(--grid-min-width--global)),
          100%
        ),
        1fr
      )
    );
  }
</style>

<div class="grid" {style}>
  <slot />
</div>
