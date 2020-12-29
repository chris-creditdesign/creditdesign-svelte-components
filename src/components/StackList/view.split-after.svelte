<script>
  import StackList from "./index.svelte";

  export let stackSpace = "";
</script>

<style>
  .test-container {
    display: flex;
    height: 100vh;
  }

  li {
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
  <StackList stackSpace="{stackSpace}">
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
    <li class="stack__split-after">.stack__split-after</li>
    <li>Item</li>
  </StackList>
</div>
