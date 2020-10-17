<script>
  import Stack from "./index.svelte";

  export let stackSpace = "";
</script>

<style>
  .test-content {
    background-color: lightblue;
  }
</style>

<Stack {stackSpace}>
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
</Stack>
