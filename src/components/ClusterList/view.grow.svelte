<script>
  import ClusterList from "./index.svelte";

  export let clusterJustifyContent = "";
  export let clusterSpace = "";
</script>

<style>
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: lightblue;
  }

  .grow {
    background-color: pink;
  }
</style>

<ClusterList
  clusterJustifyContent="{clusterJustifyContent}"
  clusterSpace="{clusterSpace}"
>
  <li class="grow">Grow</li>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
</ClusterList>
