<script>
  import Cluster from "./index.svelte";
  import Box from "../Box/index.svelte";

  export let clusterJustifyContent;
  export let clusterSpace;
</script>

<style>
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: lightblue;
  }
</style>

<Box>
  <Cluster
    clusterJustifyContent="{clusterJustifyContent}"
    clusterSpace="{clusterSpace}"
  >
    <a href="#">Item</a>
    <a href="#">Item</a>
    <a href="#">Item</a>
    <a href="#">Item</a>
    <a href="#">Item</a>
    <a href="#">Item</a>
    <a href="#">Item</a>
  </Cluster>
</Box>
