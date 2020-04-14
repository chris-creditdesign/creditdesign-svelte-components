<script>
  export let className = "";
  export let coverHeight = "";
  export let coverSpace = "";
</script>

<style>
  :global(:root) {
    --cover-space: 1rem;
    --cover-height: 100vh;
  }

  :global(.cover) {
    display: flex;
    flex-direction: column;
    min-height: var(--cover-height);
    padding: var(--cover-space);
    position: relative;
    overflow: hidden;
  }

  :global(.cover > *) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  :global(.cover > :first-child:not(.centered)) {
    margin-top: 0;
  }

  :global(.cover > :last-child:not(.centered)) {
    margin-bottom: 0;
  }

  :global(.cover > .centered) {
    margin-top: auto;
    margin-bottom: auto;
  }
</style>

<div
  class={`cover ${className}`}
  style={`${coverSpace ? `--cover-space: ${coverSpace};` : ''} ${coverHeight ? `--cover-height: ${coverHeight};` : ''}`}>
  <slot />
</div>
