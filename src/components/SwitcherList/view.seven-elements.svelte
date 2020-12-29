<script>
  import Switcher from "./index.svelte";

  export let switcherMinWidth;
  export let switcherSpace;
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

<Switcher switcherMinWidth="{switcherMinWidth}" switcherSpace="{switcherSpace}">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
  <li>Seven</li>
</Switcher>
