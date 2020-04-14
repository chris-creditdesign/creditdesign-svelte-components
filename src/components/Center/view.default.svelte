<script>
  import Center from "./index.svelte";

  export let className = "";
  export let centerSpace = "";
  export let centerMeasure = "";
</script>

<style>
  .test-content {
    background-color: lightblue;
  }

  p {
    max-width: none;
    margin: 0;
  }
</style>

<Center {className} {centerSpace} {centerMeasure}>
  <p class="test-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </p>
</Center>
