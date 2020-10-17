<script>
  export let switcherSpace = "";
  export let switcherMinWidth = "";

  let switcherSpaceComponent = switcherSpace
    ? `--switcher-space: ${switcherSpace};`
    : "";
  let switcherMinWidthComponent = switcherMinWidth
    ? `--switcher-min-width: ${switcherMinWidth};`
    : "";
  let style = `${switcherSpaceComponent} ${switcherMinWidthComponent}`;
</script>

<style>
  :global(:root) {
    --switcher-space: var(--s-1);
    --switcher-min-width: var(--measure);
  }

  .switcher--list {
    --space-between: var(--switcher-space);
    --modifier: calc(var(--switcher-min-width) - (100% - var(--space-between)));
  }

  .switcher--list__inner {
    display: flex;
    flex-wrap: wrap;
    max-width: none;
    padding: 0;
    margin: calc((var(--space-between) / 2) * -1);
    list-style: none;
  }

  :global(.switcher--list__inner > *) {
    flex-basis: calc(var(--modifier) * 999);
    flex-grow: 1;
    margin: calc(var(--space-between) / 2);
  }

  :global(.switcher--list__inner > li) {
    /* Remove default padding */
    padding: 0;
  }

  /* If there are more than 7 items, stack them automatically */
  :global(.switcher--list__inner > :nth-last-child(n + 8)) {
    flex-basis: 100%;
  }

  :global(.switcher--list__inner > :nth-last-child(n + 8) ~ *) {
    flex-basis: 100%;
  }
</style>

<div class="switcher--list" {style}>
  <ul class="switcher--list__inner">
    <slot />
  </ul>
</div>
