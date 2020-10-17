<script>
  export let gridSpace = "";
  export let gridColumnSpace = "";
  export let gridRowSpace = "";
  export let minWidth = "";

  if (gridSpace) {
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

  .grid--list {
    --grid-min-width--component: initial;
    --grid-column-space--component: initial;
    --grid-row-space--component: initial;

    display: grid;
    max-width: none;
    padding: 0;
    margin: 0;
    column-gap: var(
      --grid-column-space--component,
      var(--grid-column-space--global)
    );
    list-style: none;
    row-gap: var(--grid-row-space--component, var(--grid-row-space--global));
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

  :global(.grid--list > li) {
    max-width: none;
    padding: 0;
  }
</style>

<ul class="grid--list" {style}>
  <slot />
</ul>
