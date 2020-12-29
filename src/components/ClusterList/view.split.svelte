<script>
  import ClusterList from "./index.svelte";
  import Cluster from "../Cluster/index.svelte";

  export let clusterJustifyContent = "";
  export let clusterSpace = "";
</script>

<style>
  li,
  .test-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: lightblue;
  }
</style>

<Cluster clusterJustifyContent="space-between">
  <span class="test-content">Item</span>

  <ClusterList
    clusterJustifyContent="{clusterJustifyContent}"
    clusterSpace="{clusterSpace}"
  >
    <li>item</li>
    <li>item</li>
    <li>item</li>
    <li>item</li>
    <li>item</li>
    <li>item</li>
  </ClusterList>
</Cluster>
