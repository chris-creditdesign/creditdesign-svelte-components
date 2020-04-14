<script>
  import Cover from "./index.svelte";

  export let className = "";
  export let coverHeight;
  export let coverSpace;
</script>

<style>
  .test-content {
    background-color: lightblue;
    max-width: 100%;
  }
</style>

<Cover {className} {coverHeight} {coverSpace}>
  <p class="centered test-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </p>
</Cover>
