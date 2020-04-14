<script>
  import ClusterList from "./index.svelte";
  import Cluster from "../Cluster/index.svelte";
</script>

<style>
  .test-content {
    background-color: lightblue;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
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
