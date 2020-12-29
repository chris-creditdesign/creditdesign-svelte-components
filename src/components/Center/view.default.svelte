<script>
  import Center from "./index.svelte";

  export let centerMeasure = "";
  export let centerSpace = "";
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

<Center centerMeasure="{centerMeasure}" centerSpace="{centerSpace}">
  <span>Item</span>
</Center>
