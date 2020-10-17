<script>
  import Switcher from "./index.svelte";

  export let switcherSpace;
  export let switcherMinWidth;
</script>

<style>
  .test-content {
    max-width: none;
    background-color: lightblue;
  }
</style>

<Switcher {switcherSpace} {switcherMinWidth}>
  <p class="test-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </p>
  <p class="test-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </p>
  <p class="test-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </p>
</Switcher>
