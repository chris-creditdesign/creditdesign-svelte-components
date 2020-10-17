<script>
  import ClusterList from "./index.svelte";

  export let clusterJustifyContent = "";
  export let clusterSpace = "";
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

<ClusterList {clusterJustifyContent} {clusterSpace}>
  <li><img src="img/image-small.jpg" alt="" class="test-content" /></li>
  <li><a href="https://www.nature.com" class="test-content">Link</a></li>
  <li><a href="https://www.nature.com" class="test-content">Link</a></li>
  <li><a href="https://www.nature.com" class="test-content">Link</a></li>
  <li><a href="https://www.nature.com" class="test-content">Link</a></li>
  <li><a href="https://www.nature.com" class="test-content">Link</a></li>
  <li><a href="https://www.nature.com" class="test-content">Link</a></li>
</ClusterList>
