<script>
  export let className = "";
  export let clusterJustifyContent = "";
  export let clusterSpace = "";
</script>

<style>
  /* LayoutCluster */
  :global(:root) {
    --cluster-space: var(--s-1);
    --cluster-justify-content: flex-start;
  }

  :global(.cluster) {
    overflow: hidden;
  }

  :global(.cluster > *) {
    display: flex;
    flex-wrap: wrap;
    justify-content: var(--cluster-justify-content);
    align-items: center;
    margin: calc(var(--cluster-space) / 2 * -1);
  }

  :global(.cluster > * > *) {
    margin: calc(var(--cluster-space) / 2);
  }

  :global(.cluster > * > .grow) {
    flex-grow: 2;
  }

  :global(.cluster__split-after) {
    flex-grow: 1;
  }
</style>

<div
  class={`cluster ${className}`}
  style={`${clusterJustifyContent ? `--cluster-justify-content: ${clusterJustifyContent};` : ''} ${clusterSpace ? `--cluster-space: ${clusterSpace};` : ''}`}>
  <div>
    <slot />
  </div>
</div>
