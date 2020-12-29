<script>
  import Cover from "./index.svelte";

  export let coverHeight;
  export let coverSpace;
</script>

<style>
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: none;
    height: 100px;
    background-color: lightblue;
  }
</style>

<Cover coverHeight="{coverHeight}" coverSpace="{coverSpace}">
  <span class="cover__centered">.cover__centered</span>
</Cover>
