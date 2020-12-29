<script>
  import Sidebar from "./index.svelte";

  export let sidebarContentMinWidth;
  export let sidebarOnLeft;
  export let sidebarSpace;
  export let sidebarWidth;
</script>

<style>
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 100px;
    max-width: none;
    height: 100px;
    background-color: lightblue;
  }

  .sidebar {
    background-color: pink;
  }
</style>

<Sidebar
  sidebarContentMinWidth="{sidebarContentMinWidth}"
  sidebarOnLeft="{sidebarOnLeft}"
  sidebarSpace="{sidebarSpace}"
  sidebarWidth="{sidebarWidth}"
>
  <div slot="sidebar"><span class="sidebar">Sidebar</span></div>
  <div slot="main-content"><span>Main content</span></div>
</Sidebar>
