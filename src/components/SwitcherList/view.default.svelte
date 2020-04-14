<script>
  import Switcher from "./index.svelte";

  export let className;
  export let id;
  export let switcherSpace;
  export let switcherMinWidth;
</script>

<style>
  .test-content {
    background-color: lightblue;
    max-width: none;
  }
</style>

<Switcher {className} {id} {switcherSpace} {switcherMinWidth}>
  <li class="test-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </li>
  <li class="test-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </li>
  <li class="test-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </li>
</Switcher>
