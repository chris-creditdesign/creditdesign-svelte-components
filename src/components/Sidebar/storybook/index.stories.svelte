<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import {
    spaceOptions,
    measureOptions,
    percentOptions,
	alignItemsOptions,
  } from "../../preview-content/options.js";

  import Sidebar from "../index.svelte";
  import Stack from "../../Stack/index.svelte";
  import ClusterList from "../../ClusterList/index.svelte";

  let argTypes = {
    sidebarContentMinWidth: {
      control: { type: "select", options: percentOptions },
    },
    sidebarOnLeft: { control: { type: "boolean" } },
    sidebarSpace: { control: { type: "select", options: spaceOptions } },
    sidebarWidth: { control: { type: "select", options: measureOptions } },
	alignItems: { control: { type: "select", options: alignItemsOptions } }
  };

</script>

<style>
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100px;
    max-width: none;
    background-color: lightblue;
  }

  nav {
    max-width: none;
  }

  .sidebar__main-content {
    height: 100vh;
  }

  .sidebar__content {
    min-height: 100px;
    background-color: pink;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: none;
    height: 100px;
    background-color: lightblue;
  }

  .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: none;
    height: 50px;
    padding: var(--s-1);
    background-color: pink;
  }

</style>

<Meta title="Sidebar" component={Sidebar} {argTypes} />

<Story
  name="Default"
  let:args
  args={{ sidebarContentMinWidth: '75%', sidebarOnLeft: true, sidebarSpace: 'var(--s-1)', sidebarWidth: 'inherit', alignItems: 'stretch' }}
>
  <Sidebar {...args}>
    <svelte:fragment slot="sidebar">
		<span class="sidebar__content">Sidebar</span>
	</svelte:fragment>
    <svelte:fragment slot="main-content">
      <span class="sidebar__main-content">Main content</span>
    </svelte:fragment>
  </Sidebar>
</Story>

<Story
  name="With content"
  let:args
  args={{ sidebarContentMinWidth: '75%', sidebarOnLeft: true, sidebarSpace: 'var(--s-1)', sidebarWidth: '20ch', alignItems: 'stretch' }}
>
  <Sidebar {...args}>
    <svelte:fragment slot="sidebar">
	<nav>
      <ClusterList>
        <li>
          <a href="https://www.nature.com" class="list-item">Sidebar item</a>
        </li>
        <li>
          <a href="https://www.nature.com" class="list-item">Sidebar item</a>
        </li>
        <li>
          <a href="https://www.nature.com" class="list-item">Sidebar item</a>
        </li>
        <li>
          <a href="https://www.nature.com" class="list-item">Sidebar item</a>
        </li>
        <li>
          <a href="https://www.nature.com" class="list-item">Sidebar item</a>
        </li>
      </ClusterList>
	</nav>
    </svelte:fragment>
    <svelte:fragment slot="main-content">
      <Stack>
        <span class="item">Item</span>
        <span class="item">Item</span>
        <span class="item">Item</span>
        <span class="item">Item</span>
        <span class="item">Item</span>
      </Stack>
    </svelte:fragment>
  </Sidebar>
</Story>

<Story
  name="With no flexbox gap"
  let:args
  args={{ sidebarContentMinWidth: '75%', sidebarOnLeft: true, sidebarSpace: 'var(--s-1)', sidebarWidth: 'inherit', alignItems: 'stretch' }}
>
  <div class="no-flexbox-gap">
    <Sidebar {...args}>
      <svelte:fragment slot="sidebar"><span class="sidebar__content">Sidebar</span></svelte:fragment>
      <svelte:fragment slot="main-content">
        <span class="sidebar__main-content">Main content</span>
      </svelte:fragment>
    </Sidebar>
  </div>
</Story>
