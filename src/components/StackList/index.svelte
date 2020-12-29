<script>
  export let stackSpace = "";

  let stackSpaceComponent = stackSpace.length
    ? `--stack-space--component: ${stackSpace};`
    : "";
</script>

<style>
  :global(:root) {
    --stack-space--global: var(--s-1);
  }

  .stack--list {
    --stack-space--component: initial;
    --stack-space: var(--stack-space--component, var(--stack-space--global));

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
    margin-top: 1rem;
    margin-top: var(--stack-space);
  }

  :global(.stack--list > li) {
    max-width: none;
    padding: 0;
  }

  :global(.stack--list > .stack__split-after) {
    margin-bottom: auto;
  }

  :global(.stack--list:only-child) {
    height: 100%;
  }
</style>

<div>
  <ul class="stack--list" style="{stackSpaceComponent}">
    <slot />
  </ul>
</div>
