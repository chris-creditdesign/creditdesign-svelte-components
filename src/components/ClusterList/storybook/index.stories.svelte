<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
  import {
    spaceOptions,
    justifyContentOptions,
  } from "../../preview-content/options.js";

  import ClusterList from "../index.svelte";

  let argTypes = {
    clusterSpace: { control: { type: "select", options: spaceOptions } },
    clusterJustifyContent: {
      control: { type: "select", options: justifyContentOptions },
    },
  };

</script>

<style>
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: lightblue;
  }

  .cluster__grow {
    background-color: pink;
  }

</style>

<Meta title="ClusterList" component={ClusterList} {argTypes} />

<Story
  name="Default"
  let:args
  args={{ clusterSpace: 'var(--s-1)', clusterJustifyContent: 'flex-start' }}
>
  <ClusterList {...args}>
    <li class="item">List item</li>
    <li class="item">List item</li>
    <li class="item">List item</li>
    <li class="item">List item</li>
    <li class="item">List item</li>
    <li class="item">List item</li>
    <li class="item">List item</li>
  </ClusterList>
</Story>

<Story
  name="With a cluster__grow child element"
  let:args
  args={{ clusterSpace: 'var(--s-1)', clusterJustifyContent: 'flex-start' }}
>
  <ClusterList {...args}>
    <li class="item cluster__grow">Item</li>
    <li class="item">List item</li>
    <li class="item">List item</li>
    <li class="item">List item</li>
    <li class="item">List item</li>
    <li class="item">List item</li>
    <li class="item">List item</li>
  </ClusterList>
</Story>

<Story
  name="Combine two ClusterList elements"
  let:args
  args={{ clusterSpace: 'var(--s-1)', clusterJustifyContent: 'flex-start' }}
>
  <ClusterList clusterJustifyContent="space-between">
    <li class="item">List item</li>
    <li>
      <ClusterList {...args}>
        <li class="item">List item</li>
        <li class="item">List item</li>
        <li class="item">List item</li>
        <li class="item">List item</li>
        <li class="item">List item</li>
        <li class="item">List item</li>
      </ClusterList>
    </li>
  </ClusterList>
</Story>

<Story
  name="With focusable child elements"
  let:args
  args={{ clusterSpace: 'var(--s-1)', clusterJustifyContent: 'flex-start' }}
>
  <ClusterList {...args}>
    <li><a href="https://www.nature.com" class="item">List item</a></li>
    <li><a href="https://www.nature.com" class="item">List item</a></li>
    <li><a href="https://www.nature.com" class="item">List item</a></li>
    <li><a href="https://www.nature.com" class="item">List item</a></li>
    <li><a href="https://www.nature.com" class="item">List item</a></li>
    <li><a href="https://www.nature.com" class="item">List item</a></li>
    <li><a href="https://www.nature.com" class="item">List item</a></li>
  </ClusterList>
</Story>

<Story
  name="With no flexbox gap"
  let:args
  args={{ clusterSpace: 'var(--s-1)', clusterJustifyContent: 'flex-start' }}
>
  <div class="no-flexbox-gap">
    <ClusterList {...args}>
      <li class="item">List item</li>
      <li class="item">List item</li>
      <li class="item">List item</li>
      <li class="item">List item</li>
      <li class="item">List item</li>
      <li class="item">List item</li>
      <li class="item">List item</li>
    </ClusterList>
  </div>
</Story>
