<script>
  import Switcher from "./index.svelte";

  export let switcherMinWidth;
  export let switcherSpace;
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

<div>
  <Switcher
    switcherMinWidth="{switcherMinWidth}"
    switcherSpace="{switcherSpace}"
  >
    <span>Item</span>
    <span>Item</span>
    <span>Item</span>
  </Switcher>
</div>
