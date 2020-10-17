<script>
  export let boxSpace = "";

  let boxSpaceComponent = boxSpace ? `--box-space: ${boxSpace};` : "";
</script>

<style>
  :global(:root) {
    --box-space: var(--s-1);
  }

  .box {
    padding: var(--box-space);
  }
</style>

<div class="box" style={boxSpaceComponent}>
  <slot />
</div>
