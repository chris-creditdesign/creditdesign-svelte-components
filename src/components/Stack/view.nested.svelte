<script>
  import Stack from "./index.svelte";
  import Grid from "../Grid/index.svelte";

  export let stackSpace = "";
</script>

<style>
  .test-content {
    background-color: lightblue;
  }

  .test-content--nested {
    background-color: coral;
  }
</style>

<Grid>
  <Stack {stackSpace}>
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
    <Stack stackSpace="var(--s3)">
      <p class="test-content--nested">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
        iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
        corrupti numquam officia architecto modi! Labore natus error nisi earum?
      </p>
      <p class="test-content--nested">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
        iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
        corrupti numquam officia architecto modi! Labore natus error nisi earum?
      </p>
      <p class="test-content--nested">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
        iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
        corrupti numquam officia architecto modi! Labore natus error nisi earum?
      </p>
    </Stack>
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
  </Stack>
  <Stack stackSpace="var(--s3)">
    <p class="test-content--nested">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </p>
    <p class="test-content--nested">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </p>
    <Stack {stackSpace}>
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
    </Stack>
    <p class="test-content--nested">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </p>
    <p class="test-content--nested">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </p>
    <p class="test-content--nested">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt
      iusto eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo
      corrupti numquam officia architecto modi! Labore natus error nisi earum?
    </p>
  </Stack>
</Grid>
