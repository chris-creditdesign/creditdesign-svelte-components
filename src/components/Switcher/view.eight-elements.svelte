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

<Switcher switcherMinWidth="{switcherMinWidth}" switcherSpace="{switcherSpace}">
  <span>One</span>
  <span>Two</span>
  <span>Three</span>
  <span>Four</span>
  <span>Five</span>
  <span>Six</span>
  <span>Seven</span>
  <span>Eight</span>
</Switcher>
