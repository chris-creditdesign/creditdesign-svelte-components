<script>
  /**
   * If flexbox gap is not supported, expects a `no-flexbox-gap` class to be applied to a parent element.
   * In this case standard `Stack` margirnsn applied around the child elements.
   *
   * A child element with `.stack__split-after` applied will push
   * items below it to the bottom of the container.
   *
   * `.stack-list` set to height 100% that the Stack area will fill the available height,
   * causing the `.stack__split-after` element to be pushed to the bottom.
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
    gap: var(--stack-space);

    /* So that the Stack area will fill the available height,
     causing the `.stack__split-after` element to be pushed
     to the bottom */
    height: 100%;
  }

  :global(.stack > *) {
    margin-top: 0;
    margin-bottom: 0;
  }

  :global(.stack > .stack__split-after) {
    margin-bottom: auto;
  }

  :global(.no-flexbox-gap .stack > * + *) {
    margin-top: 1rem;
    margin-top: var(--stack-space);
  }

</style>

<div class="stack" {style}>
  <slot />
</div>
