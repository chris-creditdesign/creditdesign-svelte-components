<script>
  export let clusterJustifyContent = "";
  export let clusterSpace = "";
</script>

<style>
  :global(:root) {
    --cluster-space: var(--s-1);
    --cluster-justify-content: flex-start;
  }

  .cluster--list {
    overflow: hidden;
  }

  .cluster--list__inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: var(--cluster-justify-content);
    margin: calc(var(--cluster-space) / 2 * -1);
  }

  :global(.cluster--list__inner > *) {
    margin: calc(var(--cluster-space) / 2);
  }

  :global(.cluster--list__split-after) {
    flex-grow: 1;
  }

  :global(.cluster--list ul) {
    max-width: none;
    padding: 0;
    list-style: none;
  }

  :global(.cluster--list li) {
    padding: 0;
    max-width: none;
  }

  :global(.cluster__inner > .grow) {
    flex-grow: 2;
  }
</style>

<div
  class="cluster--list"
  style={`${clusterJustifyContent ? `--cluster-justify-content: ${clusterJustifyContent};` : ''} ${clusterSpace ? `--cluster-space: ${clusterSpace};` : ''}`}>
  <ul class="cluster--list__inner">
    <slot />
  </ul>
</div>
