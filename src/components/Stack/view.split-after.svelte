<script>
  import Stack from "./index.svelte";

  export let stackSpace = "";
</script>

<style>
  .test-container {
    display: flex;
    height: 100vh;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    max-width: none;
    height: 100px;
    background-color: lightblue;
  }
</style>

<div class="test-container">
  <Stack stackSpace="{stackSpace}">
    <span>Item</span>
    <span>Item</span>
    <span>Item</span>
    <span class="stack__split-after">.stack__split-after</span>
    <span>Item</span>
  </Stack>
</div>
