<script>
  export let sidebarWidth = "";
  export let sidebarContentMinWidth = "";
  export let sidebarSpace = "";
  export let sidebarOnRight = true;

  let sidebarWidthComponent = sidebarWidth
    ? `--sidebar-width--component: ${sidebarWidth};`
    : "";
  let sidebarContentMinWidthComponent = sidebarContentMinWidth
    ? `--sidebar-content-min-width--component: ${sidebarContentMinWidth};`
    : "";
  let sidebarSpaceComponent = sidebarSpace
    ? `--sidebar-space--component: ${sidebarSpace};`
    : "";

  let style = `${sidebarWidthComponent} ${sidebarContentMinWidthComponent} ${sidebarSpaceComponent}`;
</script>

<style>
  :global(:root) {
    --sidebar-width--global: inherit;
    --sidebar-content-min-width--global: 50%;
    --sidebar-space--global: var(--s-1);
  }

  .with-sidebar {
    --sidebar-width--component: initial;
    --sidebar-content-min-width--component: initial;
    --sidebar-space--component: initial;
    --sidebar-width: var(
      --sidebar-width--component,
      var(--sidebar-width--global)
    );
    --sidebar-space: var(
      --sidebar-space--component,
      var(--sidebar-space--global)
    );
    --sidebar-content-min-width: var(
      --sidebar-content-min-width--component,
      var(--sidebar-content-min-width--global)
    );

    overflow: hidden;
  }

  .with-sidebar__inner {
    display: flex;
    flex-wrap: wrap;
    margin: calc(var(--sidebar-space) / 2 * -1);
  }

  .sidebar {
    flex-basis: var(--sidebar-width);
    flex-grow: 1;
    margin: calc(var(--sidebar-space) / 2);
  }

  .main-content {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(var(--sidebar-content-min-width) - var(--sidebar-space));
    margin: calc(var(--sidebar-space) / 2);
  }
</style>

<div class="with-sidebar" {style}>
  <div class="with-sidebar__inner">
    {#if sidebarOnRight}
      <div class="sidebar">
        <slot name="sidebar" />
      </div>
      <div class="main-content">
        <slot name="main-content" />
      </div>
    {:else}
      <div class="main-content">
        <slot name="main-content" />
      </div>
      <div class="sidebar">
        <slot name="sidebar" />
      </div>
    {/if}
  </div>
</div>
