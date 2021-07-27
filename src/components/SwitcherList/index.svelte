<script>
  /**
   * Will switch from a column to a stacked layout below a minimum width.
   *
   * If more than seven child elements, the stacked layout is applied automatically.
   *
   * The SwitcherList element is a `ul` and expects its children to be list items.
   *
   * If flexbox gap is not supported, expects a `no-flexbox-gap` class to be applied to a parent element.
   * In this case `switcherSpace` is applied as as padding around the child elements.
   *
   * @component
   */

  /**
   * Component width below wich a column layout will be applied.
   *
   */
  export let switcherMinWidth = "";
  /**
   * Space between child elements.
   */
  export let switcherSpace = "";

  let switcherMinWidthComponent = switcherMinWidth.length
    ? `--switcher-min-width--component: ${switcherMinWidth};`
    : "";
  let switcherSpaceComponent = switcherSpace.length
    ? `--switcher-space--component: ${switcherSpace};`
    : "";
  let style = `${switcherMinWidthComponent} ${switcherSpaceComponent}`;

</script>

<style>
  :global(:root) {
    --switcher-min-width--global: var(--measure);
    --switcher-space--global: var(--s-1);
  }

  .switcher--list {
    --switcher-min-width--component: initial;
    --switcher-space--component: initial;
    --switcher-min-width: var(
      --switcher-min-width--component,
      var(--switcher-min-width--global)
    );
    --switcher-space: var(
      --switcher-space--component,
      var(--switcher-space--global)
    );
    --modifier: calc(
      var(--switcher-min-width) - (100% - var(--switcher-space))
    );

    display: flex;
    flex-wrap: wrap;
    max-width: none;
    padding: 0;
    margin: 0;
    list-style: none;
    gap: var(--switcher-space);
  }

  :global(.switcher--list > *) {
    flex-basis: calc(var(--modifier) * 999);
    flex-grow: 1;
    margin: 0;
  }

  :global(.switcher--list > li) {
    /* Remove default padding */
    padding: 0;
  }

  /* If there are more than 7 items, stack them automatically */
  :global(.switcher--list > :nth-last-child(n + 8)) {
    flex-basis: 100%;
  }

  :global(.switcher--list > :nth-last-child(n + 8) ~ *) {
    flex-basis: 100%;
  }

  :global(.no-flexbox-gap .switcher--list > *) {
    margin: var(--switcher-space);
  }

</style>

<ul class="switcher--list" {style}>
  <slot />
</ul>
