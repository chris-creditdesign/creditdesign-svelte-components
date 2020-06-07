<script>
  export let className = "";
  export let clusterJustifyContent = "";
  export let clusterSpace = "";
</script>

<style>
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
    align-items: center;
    justify-content: var(--cluster-justify-content);
    margin: calc(var(--cluster-space) / 2 * -1);
  }

  :global(.cluster > * > *) {
    margin: calc(var(--cluster-space) / 2);
  }

  :global(.cluster__split-after) {
    flex-grow: 1;
  }

  :global(.cluster ul) {
    max-width: none;
    padding: 0;
    list-style: none;
  }

  :global(.clusetr li) {
    padding: 0;
  }

  :global(.cluster > * > .grow) {
    flex-grow: 2;
  }
</style>

<div
  class={`cluster ${className}`}
  style={`${clusterJustifyContent ? `--cluster-justify-content: ${clusterJustifyContent};` : ''} ${clusterSpace ? `--cluster-space: ${clusterSpace};` : ''}`}>
  <ul role="list">
    <slot />
  </ul>
</div>
