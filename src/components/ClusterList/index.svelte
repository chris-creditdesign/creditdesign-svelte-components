<script>
  /**
   * Used to cluster list elements in a wrap-abel horizontal row.
   *
   * The ClusterList is a `ul` element. Child elements to be list items.
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

  .cluster--list {
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
    max-width: none;
    padding: 0;
    margin: 0;
    gap: var(--cluster-space);
    list-style: none;
  }

  :global(.cluster--list li) {
    max-width: none;
    padding: 0;
  }

  :global(.cluster--list > .cluster__grow) {
    flex-grow: 2;
  }

  :global(.no-flexbox-gap .cluster--list > li) {
    margin: var(--cluster-space);
  }

</style>

<ul class="cluster--list" {style}>
  <slot />
</ul>
