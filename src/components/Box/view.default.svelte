<script>
  import Box from "./index.svelte";

  export let className = "";
  export let boxSpace = "";
</script>

<style>
  img {
    max-width: 100%;
  }
</style>

<Box {className} {boxSpace}>
  <img src="img/image.jpg" alt="" />
</Box>
