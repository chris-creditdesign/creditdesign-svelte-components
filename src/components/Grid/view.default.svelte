<script>
  import Grid from "./index.svelte";

  export let gridColumnSpace;
  export let gridRowSpace;
  export let gridSpace;
  export let minWidth;
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

<Grid
  gridColumnSpace="{gridColumnSpace}"
  gridRowSpace="{gridRowSpace}"
  gridSpace="{gridSpace}"
  minWidth="{minWidth}"
>
  <span>Item</span>
  <span>Item</span>
  <span>Item</span>
  <span>Item</span>
  <span>Item</span>
  <span>Item</span>
  <span>Item</span>
</Grid>
