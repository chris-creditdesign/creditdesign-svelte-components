<script>
  import Cluster from "./index.svelte";

  export let className = "";
  export let clusterJustifyContent = "";
  export let clusterSpace = "";
</script>

<style>
  .test-content {
    justify-content: center;
    align-items: center;
    background-color: lightblue;
    width: 100px;
    height: 100px;
    display: flex;
  }
</style>

<Cluster {className} {clusterJustifyContent} {clusterSpace}>
  <img src="img/image-small.jpg" alt="" class="test-content" />
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
  <a href="https://www.nature.com" class="test-content">Link</a>
</Cluster>
