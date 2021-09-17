<script>
  /**
   * Used to cluster child elements in a wrap-abel horizontal row.
   *
   * Adding a `cluster__grow` class to a child element will cause it to stretch to fill available space.
   *
   * If flexbox gap is not supported, expects a `no-flexbox-gap` class to be applied to a parent element.
   * In this case `clusterSpace` is applied as as padding around the child elements.
   *
   * @component
   */

  /**
   * Flexbox justify content.
   */
  export let clusterJustifyContent = "";
  /**
   * Flexbox gap.
   */
  export let clusterSpace = "";
  /**
   * Flexbox align-items.
   */
  export let alignItems = "center";

  let clusterJustifyContentComponent = clusterJustifyContent.length
    ? `--cluster-justify-content--component: ${clusterJustifyContent};`
    : "";
  let clusterSpaceComponent = clusterSpace.length
    ? `--cluster-space--component: ${clusterSpace};`
    : "";
  let style = `align-items: ${alignItems}; ${clusterJustifyContentComponent} ${clusterSpaceComponent}`;

</script>

<style>
  :global(:root) {
    --cluster-space--global: var(--s-1);
    --cluster-justify-content--global: flex-start;
  }

  .cluster {
    --cluster-justify-content--component: initial;
    --cluster-space--component: initial;
    --cluster-justify-content: var(
      --cluster-justify-content--component,
      var(--cluster-justify-content--global)
    );
    --cluster-space: var(
      --cluster-space--component,
      var(--cluster-space--global)
    );

    display: flex;
    flex-wrap: wrap;
    justify-content: var(--cluster-justify-content);
    gap: var(--cluster-space);
  }

  :global(.cluster > .cluster__grow) {
    flex-grow: 2;
  }

  :global(.no-flexbox-gap .cluster > *) {
    margin: var(--cluster-space);
  }

</style>

<div class="cluster" {style}>
  <slot />
</div>
