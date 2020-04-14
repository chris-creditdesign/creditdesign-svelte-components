<script>
  import ClusterList from "./index.svelte";

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

<ClusterList
  {className}
  {clusterJustifyContent}
  {clusterclusterSpaceJustifyContent}>
  <li class="grow">
    <img src="img/image-small.jpg" alt="" class="test-content" />
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
  <li>
    <a href="https://www.nature.com" class="test-content">Link</a>
  </li>
</ClusterList>
