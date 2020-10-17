<script>
  import Box from "./index.svelte";

  export let boxSpace = "";
</script>

<style>
  img {
    max-width: 100%;
  }
</style>

<Box {boxSpace}><img src="img/image.jpg" alt="" /></Box>
