<script>
  import Stack from "./index.svelte";

  export let className = "";
  export let stackSpace = "";
</script>

<style>
  .test-container {
    display: flex;
    width: 100vw;
  }
  .test-content {
    background-color: lightblue;
    /* width: 80vw;
    min-height: 100px; */
  }
  .test-height-expander {
    width: 20vw;
    background-color: lightcoral;
    height: 100vh;
  }
</style>

<div class="test-container">
  <div class="test-height-expander" />
  <Stack {className} {stackSpace}>
    <p class="test-content">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </p>
    <p class="test-content">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </p>
    <p class="test-content">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </p>
    <p class="test-content split-before">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </p>
    <p class="test-content">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </p>
  </Stack>
</div>
