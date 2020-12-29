<script>
  import GridList from "./index.svelte";

  export let gridColumnSpace;
  export let gridRowSpace;
  export let gridSpace;
  export let minWidth;
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

<GridList
  gridColumnSpace="{gridColumnSpace}"
  gridRowSpace="{gridRowSpace}"
  gridSpace="{gridSpace}"
  minWidth="{minWidth}"
>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
</GridList>
