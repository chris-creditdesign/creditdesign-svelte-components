<script>
  export let clusterJustifyContent = "";
  export let clusterSpace = "";

  let clusterJustifyContentComponent = clusterJustifyContent.length
    ? `--cluster-justify-content--component: ${clusterJustifyContent};`
    : "";
  let clusterSpaceComponent = clusterSpace.length
    ? `--cluster-space--component: ${clusterSpace};`
    : "";
  let style = `${clusterJustifyContentComponent} ${clusterSpaceComponent}`;
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
    align-items: center;
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

<div class="cluster" style="{style}">
  <slot />
</div>
