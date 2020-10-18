<script>
  export let switcherSpace = "";
  export let switcherMinWidth = "";

  let switcherSpaceComponent = switcherSpace
    ? `--switcher-space--component: ${switcherSpace};`
    : "";
  let switcherMinWidthComponent = switcherMinWidth
    ? `--switcher-min-width--component: ${switcherMinWidth};`
    : "";
  let style = `${switcherSpaceComponent} ${switcherMinWidthComponent}`;
</script>

<style>
  :global(:root) {
    --switcher-space--global: var(--s-1);
    --switcher-min-width--global: var(--measure);
  }

  .switcher {
    --switcher-space--component: initial;
    --switcher-min-width--component: initial;
    --switcher-space: var(
      --switcher-space--component,
      var(--switcher-space--global)
    );
    --switcher-min-width: var(
      --switcher-min-width--component,
      var(--switcher-min-width--global)
    );
    --modifier: calc(
      var(--switcher-min-width) - (100% - var(--switcher-space))
    );
  }

  .switcher__inner {
    display: flex;
    flex-wrap: wrap;
    margin: calc((var(--switcher-space) / 2) * -1);
  }

  :global(.switcher__inner > *) {
    flex-basis: calc(var(--modifier) * 999);
    flex-grow: 1;
    margin: calc(var(--switcher-space) / 2);
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
  :global(.switcher__inner > :nth-last-child(n + 8)) {
    flex-basis: 100%;
  }

  :global(.switcher__inner > :nth-last-child(n + 8) ~ *) {
    flex-basis: 100%;
  }
</style>

<div class="switcher" {style}>
  <div class="switcher__inner">
    <slot />
  </div>
</div>
