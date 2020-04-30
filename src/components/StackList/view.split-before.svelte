<script>
  import StackList from "./index.svelte";

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
  }

  .test-height-expander {
    width: 20vw;
    height: 100vh;
    background-color: lightcoral;
  }
</style>

<div class="test-container">
  <div class="test-height-expander" />
  <StackList {className} {stackSpace}>
    <li class="test-content">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </li>
    <li class="test-content">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </li>
    <li class="test-content">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </li>
    <li class="test-content split-before">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </li>
    <li class="test-content">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </li>
  </StackList>
</div>
