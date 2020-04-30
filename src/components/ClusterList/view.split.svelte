<script>
  import ClusterList from "./index.svelte";
  import Cluster from "../Cluster/index.svelte";
</script>

<style>
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

  <img src="img/image-small.jpg" alt="" class="test-content" />

  <ClusterList clusterJustifyContent="flex-start">
    <li>
      <a href="https://www.nature.com" class="test-content">Link</a>
    </li>
    <li>
      <a href="https://www.nature.com" class="test-content">Link</a>
    </li>
    <li>
      <a href="https://www.nature.com" class="test-content">Link</a>
    </li>
    <li>
      <a href="https://www.nature.com" class="test-content">Link</a>
    </li>
    <li>
      <a href="https://www.nature.com" class="test-content">Link</a>
    </li>
    <li>
      <a href="https://www.nature.com" class="test-content">Link</a>
    </li>
  </ClusterList>
</Cluster>
