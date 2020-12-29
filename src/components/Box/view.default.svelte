<script>
  import Box from "./index.svelte";

  export let boxSpace = "";
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

<Box boxSpace="{boxSpace}"><span>Item</span></Box>
