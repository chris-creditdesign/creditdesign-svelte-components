<script>
  import ClusterList from "./index.svelte";

  export let clusterJustifyContent = "";
  export let clusterclusterSpaceJustifyContent = "";
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

<ClusterList {clusterJustifyContent} {clusterclusterSpaceJustifyContent}>
  <li class="grow">
    <img src="img/image-small.jpg" alt="" class="test-content" />
  </li>
  <li><a href="https://www.nature.com" class="test-content">Link</a></li>
  <li><a href="https://www.nature.com" class="test-content">Link</a></li>
  <li><a href="https://www.nature.com" class="test-content">Link</a></li>
  <li><a href="https://www.nature.com" class="test-content">Link</a></li>
  <li><a href="https://www.nature.com" class="test-content">Link</a></li>
  <li><a href="https://www.nature.com" class="test-content">Link</a></li>
</ClusterList>
