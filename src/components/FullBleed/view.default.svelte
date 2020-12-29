<script>
  import FullBleed from "./index.svelte";

  export let fullBleedMeasure = "";
  export let fullBleedSideSpace = "";
  export let fullBleedStackSpace = "";
</script>

<style>
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: none;
    min-height: 100px;
    background-color: lightblue;
  }

  span:nth-child(2n) {
    background-color: pink;
  }
</style>

<FullBleed
  fullBleedMeasure="{fullBleedMeasure}"
  fullBleedSideSpace="{fullBleedSideSpace}"
  fullBleedStackSpace="{fullBleedStackSpace}"
>
  <span>Item</span>
  <span class="full-bleed">.full-bleed</span>
  <span>Item</span>
  <span class="full-bleed--2">.full-bleed--2</span>
  <span>Item</span>
  <span class="full-bleed--3">.full-bleed--3</span>
  <span>Item</span>
  <span class="full-bleed--4">.full-bleed--4</span>
  <span>Item</span>
  <span class="full-bleed--left">.full-bleed--left</span>
  <span>Item</span>
  <span class="full-bleed--left-2">.full-bleed--left-2</span>
  <span>Item</span>
  <span class="full-bleed--left-3">.full-bleed--left-3</span>
  <span>Item</span>
  <span class="full-bleed--left-4">.full-bleed--left-4</span>
  <span>Item</span>
  <span class="full-bleed--right">.full-bleed--right</span>
  <span>Item</span>
  <span class="full-bleed--right-2">.full-bleed--right-2</span>
  <span>Item</span>
  <span class="full-bleed--right-3">.full-bleed--right-3</span>
  <span>Item</span>
  <span class="full-bleed--right-4">.full-bleed--right-4</span>
  <span>Item</span>
</FullBleed>
