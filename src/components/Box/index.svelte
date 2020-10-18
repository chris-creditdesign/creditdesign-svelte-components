<script>
  export let boxSpace = "";

  let boxSpaceComponent = boxSpace
    ? `--box-space--component: ${boxSpace};`
    : "";
</script>

<style>
  :global(:root) {
    --box-space--global: var(--s-1);
  }

  .box {
    --box-space--component: initial;
    --box-space: var(--box-space--component, var(--box-space--global, 1rem));

    padding: 1rem;
    padding: var(--box-space);
  }
</style>

<div class="box" style={boxSpaceComponent}>
  <slot />
</div>
