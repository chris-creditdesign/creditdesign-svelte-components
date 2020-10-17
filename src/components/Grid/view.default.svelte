<script>
  import Grid from "./index.svelte";

  export let gridSpace;
  export let gridColumnSpace;
  export let gridRowSpace;
  export let minWidth;
</script>

<style>
  .test-content {
    min-height: 100px;
    background-color: lightblue;
  }
</style>

<Grid {gridSpace} {gridColumnSpace} {gridRowSpace} {minWidth}>
  <div class="test-content" />
  <div class="test-content" />
  <div class="test-content" />
  <div class="test-content" />
  <div class="test-content" />
  <div class="test-content" />
  <div class="test-content" />
</Grid>
