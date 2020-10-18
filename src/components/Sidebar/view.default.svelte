<script>
  import Sidebar from "./index.svelte";
  import Box from "../Box/index.svelte";
  import Stack from "../Stack/index.svelte";

  export let sidebarWidth;
  export let sidebarContentMinWidth;
  export let sidebarSpace;
  export let sidebarOnRight;
</script>

<style>
  .sidebar-content {
    height: 100%;
    background-color: lightblue;
  }

  .sidebar-content p {
    margin: 0;
  }

  .not-sidebar-content {
    height: 100%;
    background-color: lightgreen;
  }
</style>

<Sidebar
  {sidebarWidth}
  {sidebarContentMinWidth}
  {sidebarSpace}
  {sidebarOnRight}>
  <div slot="sidebar" class="sidebar-content">
    <Box>
      <p>This is the sidebar</p>
    </Box>
  </div>
  <div slot="main-content" class="not-sidebar-content">
    <Box>
      <Stack>
        <h2>This is the main box</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          quia distinctio molestiae optio. Quis, officiis ipsum accusantium
          deserunt nam eius atque quibusdam ea fuga, magni, non suscipit iste
          dolorem consequatur.
        </p>
      </Stack>
    </Box>
  </div>
</Sidebar>
