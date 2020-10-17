<script>
  import GridList from "./index.svelte";

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

  .test-content p {
    margin: 0;
  }
</style>

<GridList {gridSpace} {gridColumnSpace} {gridRowSpace} {minWidth}>
  <li class="test-content">
    <p>Test content.</p>
  </li>
  <li class="test-content">
    <p>Test content.</p>
  </li>
  <li class="test-content">
    <p>Test content.</p>
  </li>
  <li class="test-content">
    <p>Test content.</p>
  </li>
  <li class="test-content">
    <p>Test content.</p>
  </li>
  <li class="test-content">
    <p>Test content.</p>
  </li>
  <li class="test-content">
    <p>Test content.</p>
  </li>
</GridList>
