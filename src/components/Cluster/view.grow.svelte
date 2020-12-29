<script>
  import Cluster from "./index.svelte";

  export let clusterJustifyContent;
  export let clusterSpace;
</script>

<style>
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: lightblue;
  }

  .grow {
    background-color: pink;
  }
</style>

<Cluster
  clusterJustifyContent="{clusterJustifyContent}"
  clusterSpace="{clusterSpace}"
>
  <span class="grow">Item</span>
  <span>Item</span>
  <span>Item</span>
  <span>Item</span>
  <span>Item</span>
  <span>Item</span>
  <span>Item</span>
</Cluster>
