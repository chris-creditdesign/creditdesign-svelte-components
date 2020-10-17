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

  .switcher--list {
    --switcher-space--component: initial;
    --switcher-min-width--component: initial;
    --space-between: var(
      --switcher-space--component,
      var(--switcher-space--global)
    );
    /* stylelint-disable */
    --modifier: calc(
      var(--switcher-min-width--component, var(--switcher-min-width--global)) -
        (100% - var(--space-between))
    );
    /* stylelint-enable */
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
