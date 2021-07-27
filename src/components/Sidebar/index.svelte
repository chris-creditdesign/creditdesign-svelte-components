<script>
  /**
   * Sidebar content will be placed below or above the main content at
   * the minimum width.
   *
   * Expects two slots `main-content` and `sidebar`.
   *
   * If flexbox gap is not supported, expects a `no-flexbox-gap` class to be applied to a parent element.
   * In this case `sidebarSpace` is applied as as padding around the `.main-content` and `.sidebar` elements.
   *
   * @component
   */

  /**
   * Minimum width of content at which point layout will flip.
   * ie if the `main-content` is less that 50% of the width
   * the sidebar will be placed above or below.
   */
  export let sidebarContentMinWidth = "";
  /**
   * If true the sidebar will be on the left / below the main content.
   * If false the sidebar will be on the right / above.
   */
  export let sidebarOnLeft = true;
  /**
   * Side of gutter between the sidebar and the main content.
   */
  export let sidebarSpace = "";
  /**
   * If 'inherit' the width of the sidebar will be defined by its contents.
   */
  export let sidebarWidth = "";

  let sidebarContentMinWidthComponent = sidebarContentMinWidth.length
    ? `--sidebar-content-min-width--component: ${sidebarContentMinWidth};`
    : "";
  let sidebarSpaceComponent = sidebarSpace.length
    ? `--sidebar-space--component: ${sidebarSpace};`
    : "";
  let sidebarWidthComponent = sidebarWidth.length
    ? `--sidebar-width--component: ${sidebarWidth};`
    : "";

  let style = `${sidebarContentMinWidthComponent}  ${sidebarSpaceComponent} ${sidebarWidthComponent}`;

</script>

<style>
  :global(:root) {
    --sidebar-content-min-width--global: 50%;
    --sidebar-space--global: var(--s-1);
    --sidebar-width--global: inherit;
  }

  .sidebar--wrapper {
    --sidebar-content-min-width--component: initial;
    --sidebar-space--component: initial;
    --sidebar-width--component: initial;
    --sidebar-content-min-width: var(
      --sidebar-content-min-width--component,
      var(--sidebar-content-min-width--global)
    );
    --sidebar-space: var(
      --sidebar-space--component,
      var(--sidebar-space--global)
    );
    --sidebar-width: var(
      --sidebar-width--component,
      var(--sidebar-width--global)
    );

    display: flex;
    flex-wrap: wrap;
    gap: var(--sidebar-space);
  }

  .sidebar {
    flex-basis: var(--sidebar-width);
    flex-grow: 1;
    margin: 0;
  }

  .main-content {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(var(--sidebar-content-min-width) - var(--sidebar-space));
    margin: 0;
  }

  :global(.no-flexbox-gap .sidebar--wrapper > *) {
    margin: var(--sidebar-space);
  }

</style>

<div class="sidebar--wrapper" {style}>
  {#if sidebarOnLeft}
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
