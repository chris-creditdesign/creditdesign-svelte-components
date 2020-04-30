<script>
  export let className = "";
  export let id = "";
  export let switcherSpace = "";
  export let switcherMinWidth = "";
</script>

<style>
  :global(:root) {
    --switcher-space: var(--s-1);
    --switcher-min-width: var(--measure);
  }

  :global(.switcher > *) {
    --space-between: var(--switcher-space);
    --modifier: calc(var(--switcher-min-width) - (100% - var(--space-between)));

    display: flex;
    flex-wrap: wrap;
    margin: calc((var(--space-between) / 2) * -1);
  }

  :global(.switcher > * > *) {
    flex-basis: calc(var(--modifier) * 999);
    flex-grow: 1;
    margin: calc(var(--space-between) / 2);
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
  :global(.switcher > * > :nth-last-child(n + 8)) {
    flex-basis: 100%;
  }

  :global(.switcher > * > :nth-last-child(n + 8) ~ *) {
    flex-basis: 100%;
  }
</style>

<div
  {id}
  class={`switcher ${className}`}
  style={`${switcherSpace ? `--switcher-space: ${switcherSpace};` : ''} ${switcherMinWidth ? `--switcher-min-width: ${switcherMinWidth};` : ''}`}>
  <div>
    <slot />
  </div>
</div>
