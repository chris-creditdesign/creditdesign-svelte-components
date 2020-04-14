<script>
  import Grid from "./index.svelte";

  export let className = "";
  export let gridColumnSpace;
  export let gridRowSpace;
  export let minWidth;
</script>

<style>
  .test-content {
    background-color: lightblue;
    min-height: 100px;
  }
</style>

<Grid {className} {gridColumnSpace} {gridRowSpace} {minWidth}>
  <div class="test-content" />
  <div class="test-content" />
  <div class="test-content" />
  <div class="test-content" />
  <div class="test-content" />
  <div class="test-content" />
  <div class="test-content" />
</Grid>
