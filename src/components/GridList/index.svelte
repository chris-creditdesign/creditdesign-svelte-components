<script>
  export let gridColumnSpace = "";
  export let gridRowSpace = "";
  export let gridSpace = "";
  export let minWidth = "";

  if (gridSpace.length) {
    gridColumnSpace = gridRowSpace = gridSpace;
  }

  let gridColumnSpaceComponent = gridColumnSpace.length
    ? `--grid-column-space--component: ${gridColumnSpace};`
    : "";
  let gridRowSpaceComponent = gridRowSpace.length
    ? `--grid-row-space--component: ${gridRowSpace};`
    : "";
  let minWidthComponent = minWidth.length
    ? `--grid-min-width--component: ${minWidth};`
    : "";
  let style = `${gridColumnSpaceComponent} ${gridRowSpaceComponent} ${minWidthComponent}`;
</script>

<style>
  :global(:root) {
    --grid-column-space--global: var(--grid-space--global);
    --grid-min-width--global: var(--measure-small);
    --grid-row-space--global: var(--grid-space--global);
    --grid-space--global: var(--s-1);
  }

  .grid--list {
    --grid-column-space--component: initial;
    --grid-min-width--component: initial;
    --grid-row-space--component: initial;
    --grid-column-space: var(
      --grid-column-space--component,
      var(--grid-column-space--global)
    );
    --grid-min-width: var(
      --grid-min-width--component,
      var(--grid-min-width--global)
    );
    --grid-row-space: var(
      --grid-row-space--component,
      var(--grid-row-space--global)
    );

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

<ul class="grid--list" style="{style}">
  <slot />
</ul>
