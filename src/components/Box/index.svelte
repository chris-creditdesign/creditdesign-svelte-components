<script>
  export let boxSpace = "";
</script>

<style>
  :global(:root) {
    --box-space: var(--s-1);
  }

  .box {
    padding: var(--box-space);
  }
</style>

<div class="box" style={`${boxSpace ? `--box-space: ${boxSpace};` : ''}`}>
  <slot />
</div>
