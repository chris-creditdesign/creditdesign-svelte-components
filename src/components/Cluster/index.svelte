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

    overflow: hidden;
  }

  .cluster__inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: var(--cluster-justify-content);
    margin: 1rem;
    margin: calc(var(--cluster-space) / 2 * -1);
  }

  :global(.cluster__inner > *) {
    margin: calc(var(--cluster-space) / 2);
  }

  :global(.cluster__split-after) {
    flex-grow: 1;
  }

  :global(.cluster__inner > .grow) {
    flex-grow: 2;
  }
</style>

<div class="cluster" style="{style}">
  <div class="cluster__inner">
    <slot />
  </div>
</div>
