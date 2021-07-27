<script>
  /**
   * To allow Stacks to be nested, the `.stack` div is wrapped in
   * a `.stack--wrapper` div.
   *
   * A child element with `.stack__split-after` applied will push
   * items below it to the bottom of the container.
   *
   * @component
   */

  /**
   * Vertical space between child elments.
   */
  export let stackSpace = "";

  let style = stackSpace.length
    ? `--stack-space--component: ${stackSpace};`
    : "";

</script>

<style>
  :global(:root) {
    --stack-space--global: var(--s-1);
  }

  .stack {
    --stack-space--component: initial;
    --stack-space: var(--stack-space--component, var(--stack-space--global));

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
  }

  :global(.stack > *) {
    margin: 0;
  }

  :global(.stack > * + *) {
    margin-top: 1rem;
    margin-top: var(--stack-space);
  }

  /* So that the Stack area will fill the available height,
     causing the `.stack__split-after` element to be pushed
     to the bottom */
  .sack--wrapper {
    height: 100%;
  }

  :global(.stack > .stack__split-after) {
    margin-bottom: auto;
  }

</style>

<div class="sack--wrapper">
  <div class="stack" {style}>
    <slot />
  </div>
</div>
