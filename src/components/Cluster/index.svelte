<script>
  export let clusterJustifyContent = "";
  export let clusterSpace = "";
</script>

<style>
  :global(:root) {
    --cluster-space: var(--s-1);
    --cluster-justify-content: flex-start;
  }

  .cluster {
    overflow: hidden;
  }

  .cluster__inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: var(--cluster-justify-content);
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

<div
  class="cluster"
  style={`${clusterJustifyContent ? `--cluster-justify-content: ${clusterJustifyContent};` : ''} ${clusterSpace ? `--cluster-space: ${clusterSpace};` : ''}`}>
  <div class="cluster__inner">
    <slot />
  </div>
</div>
