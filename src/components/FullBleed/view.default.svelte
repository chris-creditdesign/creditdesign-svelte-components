<script>
  import FullBleed from "./index.svelte";

  export let fullBleedStackSpace = "";
  export let fullBleedSideSpace = "";
  export let fullBleedMeasure = "";
</script>

<style>
  span {
    max-width: none;
  }

  .test-content {
    background-color: lightblue;
  }

  .test-img {
    min-height: 100px;
    background-color: lightgreen;
  }
</style>

<FullBleed {fullBleedStackSpace} {fullBleedSideSpace} {fullBleedMeasure}>
  <p class="test-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </p>
  <span class="test-img full-bleed">.full-bleed</span>
  <p class="test-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </p>
  <span class="test-img full-bleed--2">.full-bleed--2</span>
  <p class="test-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </p>
  <span class="test-img full-bleed--3">.full-bleed--3</span>
  <p class="test-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </p>
  <span class="test-img full-bleed--4">.full-bleed--4</span>
  <p class="test-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </p>
  <span class="test-img full-bleed--left">.full-bleed--left</span>
  <p class="test-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </p>
  <span class="test-img full-bleed--left-2">.full-bleed--left-2</span>
  <p class="test-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </p>
  <span class="test-img full-bleed--left-3">.full-bleed--left-3</span>
  <p class="test-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </p>
  <span class="test-img full-bleed--left-4">.full-bleed--left-4</span>
  <p class="test-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </p>
  <span class="test-img full-bleed--right">.full-bleed--right</span>
  <p class="test-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </p>
  <span class="test-img full-bleed--right-2">.full-bleed--right-2</span>
  <p class="test-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </p>
  <span class="test-img full-bleed--right-3">.full-bleed--right-3</span>
  <p class="test-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </p>
  <span class="test-img full-bleed--right-4">.full-bleed--right-4</span>
  <p class="test-content">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam deserunt iusto
    eveniet dolore eum eligendi veniam, ipsam deleniti commodi illo corrupti
    numquam officia architecto modi! Labore natus error nisi earum?
  </p>
  <span class="test-img" />
</FullBleed>
