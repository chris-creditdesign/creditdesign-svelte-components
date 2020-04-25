<script>
  import GridList from "./index.svelte";

  export let className = "";
  export let gridSpace;
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

<GridList {className} {gridSpace} {gridColumnSpace} {gridRowSpace} {minWidth}>
  <li>
    <div class="test-content" />
  </li>
  <li>
    <div class="test-content" />
  </li>
  <li>
    <div class="test-content" />
  </li>
  <li>
    <div class="test-content" />
  </li>
  <li>
    <div class="test-content" />
  </li>
  <li>
    <div class="test-content" />
  </li>
  <li>
    <div class="test-content" />
  </li>
</GridList>
