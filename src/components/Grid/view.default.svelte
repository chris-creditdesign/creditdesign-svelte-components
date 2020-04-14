<script>
  import Grid from "./index.svelte";

  export let className = "";
  export let gridSpace;
</script>

<style>
  .test-content {
    background-color: lightblue;
    min-height: 100px;
  }
</style>

<Grid {className} {gridSpace}>
  <div class="test-content" />
  <div class="test-content" />
  <div class="test-content" />
  <div class="test-content" />
  <div class="test-content" />
  <div class="test-content" />
  <div class="test-content" />
</Grid>
