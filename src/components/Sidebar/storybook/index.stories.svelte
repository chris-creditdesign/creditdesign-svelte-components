<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import {
    spaceOptions,
    measureOptions,
    percentOptions,
  } from "../../preview-content/options.js";

  import Sidebar from "../index.svelte";

  let argTypes = {
    sidebarContentMinWidth: {
      control: { type: "select", options: percentOptions },
    },
    sidebarOnLeft: { control: { type: "boolean" } },
    sidebarSpace: { control: { type: "select", options: spaceOptions } },
    sidebarWidth: { control: { type: "select", options: measureOptions } },
  };

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

<Meta title="Sidebar" component={Sidebar} {argTypes} />

<Story
  name="Default"
  let:args
  args={{ sidebarContentMinWidth: '75%', sidebarOnLeft: true, sidebarSpace: 'var(--s-1)', sidebarWidth: 'inherit' }}
>
  <Sidebar {...args}>
    <div slot="sidebar"><span class="sidebar">Sidebar</span></div>
    <div slot="main-content"><span>Main content</span></div>
  </Sidebar>
</Story>

<Story
  name="With no flexbox gap"
  let:args
  args={{ sidebarContentMinWidth: '75%', sidebarOnLeft: true, sidebarSpace: 'var(--s-1)', sidebarWidth: 'inherit' }}
>
  <div class="no-flexbox-gap">
    <Sidebar {...args}>
      <div slot="sidebar"><span class="sidebar">Sidebar</span></div>
      <div slot="main-content"><span>Main content</span></div>
    </Sidebar>
  </div>
</Story>
