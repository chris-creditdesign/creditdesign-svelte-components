<script>
  import Cluster from "./index.svelte";

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

<Cluster {clusterJustifyContent} {clusterclusterSpaceJustifyContent}>
  <img src="img/image-small.jpg" alt="" class="test-content grow" />
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
</Cluster>
