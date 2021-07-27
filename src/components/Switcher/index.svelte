<script>
  /**
   * Will switch from a column to a stacked layout below a minimum width.
   *
   * If more than seven child elements, the stacked layout is applied automatically.
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

  .switcher {
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
    gap: var(--switcher-space);
  }

  :global(.switcher > *) {
    flex-basis: calc(var(--modifier) * 999);
    flex-grow: 1;
    margin: 0;
  }

  /*
  	If there are 8 or more items, stack them automatically.
	`:nth-last-child(n + 8)`
	First select every element that is 8 or more elements from
	the end of the list, counting backwards.
	`:nth-last-child(n + 8) ~ *`
	Then select every element that is a general sibling of an elemnet
	that is 8 or more elements from the end of the list i.e. every elemement
	that comes after the selected element.
	Combining these selectors means that if there are 8 or more elements
	in total they will all be selected. If there are less than 8,
	none will be selecetd.
  */
  :global(.switcher > :nth-last-child(n + 8)) {
    flex-basis: 100%;
  }

  :global(.switcher > :nth-last-child(n + 8) ~ *) {
    flex-basis: 100%;
  }

  :global(.no-flexbox-gap .switcher > *) {
    margin: var(--switcher-space);
  }

</style>

<div class="switcher" {style}>
  <slot />
</div>
