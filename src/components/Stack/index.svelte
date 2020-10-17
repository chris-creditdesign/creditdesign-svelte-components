<script>
  export let stackSpace = "";

  let stackSpaceComponent = stackSpace
    ? `--stack-space--component: ${stackSpace};`
    : "";
</script>

<style>
  :global(:root) {
    --stack-space--global: var(--s-1);
  }

  .stack {
    --stack-space--component: initial;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  :global(.stack > *) {
    margin: 0;
  }

  :global(.stack > * + *) {
    margin-top: 1rem;
    margin-top: var(--stack-space--component, var(--stack-space--global));
  }

  :global(.stack:only-child) {
    height: 100%;
  }

  :global(.stack > .split-before) {
    margin-bottom: auto;
  }
</style>

<div>
  <div class="stack" style={stackSpaceComponent}>
    <slot />
  </div>
</div>
