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
</style>

<div class="no-flexbox-gap">
  <Cluster
    clusterJustifyContent="{clusterJustifyContent}"
    clusterSpace="{clusterSpace}"
  >
    <span>Item</span>
    <span>Item</span>
    <span>Item</span>
    <span>Item</span>
    <span>Item</span>
    <span>Item</span>
    <span>Item</span>
  </Cluster>
</div>
