<script>
  import Stack from "./index.svelte";

  export let stackSpace = "";
</script>

<style>
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: none;
    height: 100px;
    background-color: lightblue;
  }
</style>

<Stack stackSpace="{stackSpace}">
  <span>Item</span>
  <span>Item</span>
  <span>Item</span>
  <span>Item</span>
  <span>Item</span>
</Stack>
