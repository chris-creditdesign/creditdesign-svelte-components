<script>
  export let stackSpace = "";
</script>

<style>
  :global(:root) {
    --stack-space: var(--s-1);
  }

  .stack {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  :global(.stack > *) {
    margin: 0;
  }

  :global(.stack > * + *) {
    margin-top: var(--stack-space);
  }

  :global(.stack:only-child) {
    height: 100%;
  }

  :global(.stack > .split-before) {
    margin-bottom: auto;
  }
</style>

<div>
  <div
    class="stack"
    style={`${stackSpace ? `--stack-space: ${stackSpace};` : ''}`}>
    <slot />
  </div>
</div>
