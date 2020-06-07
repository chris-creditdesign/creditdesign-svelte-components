<script>
  export let className = "";
  export let stackSpace = "";
</script>

<style>
  :global(:root) {
    --stack-space: var(--s-1);
  }

  :global(.stack) {
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

  /* List specific modifiers */
  :global(ul.stack) {
    max-width: none;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  /* List item specific modifiers */
  :global(ul.stack li) {
    max-width: none;
    padding: 0;
  }

  :global(.stack > .split-before) {
    margin-bottom: auto;
  }

  :global(.stack:only-child) {
    height: 100%;
  }
</style>

<div>
  <ul
    role="list"
    class={`stack ${className}`}
    style={`${stackSpace ? `--stack-space: ${stackSpace};` : ''}`}>
    <slot />
  </ul>
</div>
