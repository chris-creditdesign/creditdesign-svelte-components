<script>
  export let stackSpace = "";

  let stackSpaceComponent = stackSpace ? `--stack-space: ${stackSpace};` : "";
</script>

<style>
  :global(:root) {
    --stack-space: var(--s-1);
  }

  .stack--list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: none;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  :global(.stack--list > *) {
    margin: 0;
  }

  :global(.stack--list > * + *) {
    margin-top: var(--stack-space);
  }

  :global(.stack--list > li) {
    max-width: none;
    padding: 0;
  }

  :global(.stack--list > .split-before) {
    margin-bottom: auto;
  }

  :global(.stack--list:only-child) {
    height: 100%;
  }
</style>

<div>
  <ul class="stack--list" style={stackSpaceComponent}>
    <slot />
  </ul>
</div>
