<script>
  import Cluster from "./index.svelte";

  export let className = "";
  export let clusterJustifyContent = "";
  export let clusterclusterSpaceJustifyContent = "";
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

<Cluster
  {className}
  {clusterJustifyContent}
  {clusterclusterSpaceJustifyContent}>
  <img src="img/image-small.jpg" alt="" class="test-content grow" />
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
</Cluster>
