<script>
  import StackList from "./index.svelte";

  export let stackSpace = "";
</script>

<style>
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: none;
    height: 100px;
    background-color: lightblue;
  }
</style>

<StackList stackSpace="{stackSpace}">
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
</StackList>
