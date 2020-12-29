<script>
  export let switcherMinWidth = "";
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

    overflow: hidden;
  }

  .switcher--list__inner {
    display: flex;
    flex-wrap: wrap;
    max-width: none;
    padding: 0;
    margin: calc((var(--switcher-space) / 2) * -1);
    list-style: none;
  }

  :global(.switcher--list__inner > *) {
    flex-basis: calc(var(--modifier) * 999);
    flex-grow: 1;
    margin: calc(var(--switcher-space) / 2);
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

<div class="switcher--list" style="{style}">
  <ul class="switcher--list__inner">
    <slot />
  </ul>
</div>
