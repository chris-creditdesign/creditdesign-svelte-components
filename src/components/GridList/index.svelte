<script>
  export let gridSpace = "";
  export let gridColumnSpace = "";
  export let gridRowSpace = "";
  export let minWidth = "";

  if (gridSpace) {
    gridColumnSpace = gridRowSpace = gridSpace;
  }

  let gridColumnSpaceComponent = gridColumnSpace
    ? `--grid-column-space: ${gridColumnSpace};`
    : "";
  let gridRowSpaceComponent = gridRowSpace
    ? `--grid-row-space: ${gridRowSpace};`
    : "";
  let minWidthComponent = minWidth ? `--grid-min-width: ${minWidth};` : "";
  let style = `${gridColumnSpaceComponent} ${gridRowSpaceComponent} ${minWidthComponent}`;
</script>

<style>
  :global(:root) {
    --grid-space: var(--s-1);
    --grid-column-space: var(--grid-space);
    --grid-row-space: var(--grid-space);
    --grid-min-width: var(--measure-small);
  }

  .grid--list {
    display: grid;
    max-width: none;
    padding: 0;
    margin: 0;
    column-gap: var(--grid-column-space);
    list-style: none;
    row-gap: var(--grid-row-space);
    grid-template-columns: repeat(
      auto-fit,
      minmax(min(var(--grid-min-width), 100%), 1fr)
    );
  }

  :global(.grid--list > li) {
    max-width: none;
    padding: 0;
  }
</style>

<ul class="grid--list" {style}>
  <slot />
</ul>
