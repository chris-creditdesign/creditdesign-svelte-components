<script>
  import Cluster from "./index.svelte";
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
  <Cluster clusterJustifyContent="flex-start">
    <a href="https://www.nature.com" class="test-content">Link</a>
    <a href="https://www.nature.com" class="test-content">Link</a>
    <a href="https://www.nature.com" class="test-content">Link</a>
    <a href="https://www.nature.com" class="test-content">Link</a>
    <a href="https://www.nature.com" class="test-content">Link</a>
    <a href="https://www.nature.com" class="test-content">Link</a>
  </Cluster>
</Cluster>
